/* eslint-disable react-hooks/exhaustive-deps */
import { lazy, useEffect, useState, useRef } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { heroText } from "@/translation/global.ts";
import AddCountry from "../components/add-country/add-country";
import EditCountry from "../components/edit-country/edit-country.tsx";
import { common } from "@/translation/global.ts";
import {
  deleteCountry,
  updateCountry,
  addCountry,
  fetchServerPage,
} from "@/api/countries/index.ts";
import { useMutation, useInfiniteQuery } from "@tanstack/react-query";
import { Countries, newCountries } from "../countries.type.ts";

import { useVirtualizer } from "@tanstack/react-virtual";
// import Card from "../components/card/card/card.tsx";

const LazyHero = lazy(() => import("@/pages/home/components/hero"));
const LazyCardContent = lazy(
  () => import("@/pages/home/components/card/card-content"),
);
// const LazyCardHeader = lazy(
//   () => import("@/pages/home/components/card/card-header"),
// );
const LazyCardFooter = lazy(
  () => import("@/pages/home/components/card/card-footer"),
);

export const HomePageView = () => {
  const [modalComp, setModalComp] = useState(false);
  const [List, setList] = useState<newCountries[]>();
  const [searchParams] = useSearchParams();
  console.log(List);
  const sort = searchParams.get("sort");

  const {
    status,
    data: countriesList,
    error,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    refetch: getRefetch,
  } = useInfiniteQuery({
    queryKey: ["countries-list"],
    queryFn: (ctx) => fetchServerPage(10, ctx.pageParam, sort as string),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.nextOffset;
    },
  });

  const allRows = countriesList
    ? countriesList.pages.flatMap((d) => d.rows)
    : [];

  useEffect(() => {
    getRefetch();
    if (countriesList) {
      // @ts-expect-error after
      setList(countriesList);
    }
  }, [countriesList, sort]);

  const {
    mutate: deleteMutation,
    isPending: isDeleting,
    isError: isDeleteError,
  } = useMutation({ mutationFn: deleteCountry });

  const {
    mutate: updateMutation,
    isPending: isUpdating,
    isError: isUpdateError,
  } = useMutation({ mutationFn: updateCountry });

  const {
    mutate: addMutation,
    isPending: isAdding,
    isError: isAddError,
  } = useMutation({ mutationFn: addCountry });

  const params = useParams();
  const lng = params.lang as keyof typeof common;

  const handleVoteUp = (id: string) => {
    if (id) {
      const newVote = allRows.find((c: Countries) => {
        if (c.id == id) {
          return c;
        }
        return null;
      });

      updateMutation(
        {
          id: id,
          payload: {
            vote: Number(newVote?.vote) + 1,
          },
        },
        { onSuccess: () => getRefetch() },
      );
    }
  };

  const handleNewCountry = (countryFields: {
    name: string;
    nameEn: string;
    capital: string;
    capitalEn: string;
    population: string;
    image: string;
  }) => {
    addMutation(
      {
        payload: {
          id: (Number(allRows?.at(-1)?.id) + 1).toString(),
          name: {
            ka: countryFields.name,
            en: countryFields.nameEn,
          },
          capital: {
            ka: countryFields.capital,
            en: countryFields.capitalEn,
          },
          population: countryFields.population,
          image: countryFields.image,
          intro: {
            ka: countryFields.name,
            en: countryFields.nameEn,
          },
          flag: "georgia.png",
          vote: 0,
          disabled: 0,
          uploaded: 0,
        },
      },
      { onSuccess: () => getRefetch() },
    );
  };

  const handleEditCountry = (countryFields: {
    name: string;
    nameEn: string;
    capital: string;
    capitalEn: string;
    population: string;
    image: string;
    id: string;
  }) => {
    updateMutation(
      {
        id: countryFields.id,
        payload: {
          name: {
            ka: countryFields.name,
            en: countryFields.nameEn,
          },
          capital: {
            ka: countryFields.capital,
            en: countryFields.capitalEn,
          },
          population: countryFields.population,
          image: countryFields.image,
          vote: 0,
        },
      },
      { onSuccess: () => getRefetch() },
    );
  };

  const handleDeleteCountry = (id: string) => {
    deleteMutation({ id: id }, { onSuccess: () => getRefetch() });
  };

  const ChangeModal = (modal: boolean) => {
    setModalComp(!modal);
  };
  const parentElement = useRef(null);
  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? allRows.length + 1 : allRows.length,
    getScrollElement: () => parentElement.current,
    estimateSize: () => 230,
    paddingStart: 20,
    paddingEnd: 20,
  });
  const items = rowVirtualizer.getVirtualItems();

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse();

    if (!lastItem) {
      return;
    }

    if (
      lastItem.index >= allRows.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allRows.length,
    isFetchingNextPage,
    rowVirtualizer.getVirtualItems(),
  ]);
  return (
    <>
      {isDeleting ? "მიმდინარეობას ქვეყნის წაშლა" : ""}
      {isDeleteError ? "ვერ მოხერხდა ქვენის წაშლა" : ""}
      {isAddError ? "ვერ მოხერხდა ქვეყნის დამატება" : ""}
      {isUpdateError ? "სამწუხაროდ ვერ მოხერხდა ქვეყნის რედაქტირება" : ""}
      <LazyHero heroText={heroText[lng]} />

      <div className="container ">
        <Link to={`?sort=asc`}>
          <button style={{ marginRight: "15px" }}>
            {common[lng].sort_asc}
          </button>
        </Link>
        <Link to={`?sort=desc`}>
          <button>{common[lng].sort_desc}</button>
        </Link>

        <AddCountry
          onCountryCreate={handleNewCountry}
          modalComp={modalComp}
          ChangeModal={ChangeModal}
          addLoading={isAdding}
        />
      </div>
      {status === "pending" ? (
        <p>Loading...</p>
      ) : status === "error" ? (
        <span>Error: {error.message}</span>
      ) : (
        <div
          className="container card-list-container"
          style={{ width: "100%", height: "600px", overflowY: "scroll" }}
          ref={parentElement}
        >
          <div
            style={{
              width: "85%",
              marginLeft: "auto",
              marginRight: "auto",
              position: "relative",
              height: `${rowVirtualizer.getTotalSize()}px`,
            }}
          >
            {items.map((item) => {
              const isLoaderRow = item.index > allRows.length - 1;
              const country = allRows[item.index];
              return (
                <div
                  key={item.key}
                  ref={rowVirtualizer.measureElement}
                  data-index={item.index}
                  style={{
                    position: "absolute",
                    marginBottom: "20px",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: `${item.size}px`,
                    transform: `translateY(${item.start}px)`,
                  }}
                >
                  {isLoaderRow ? (
                    hasNextPage ? (
                      "Loading more..."
                    ) : (
                      "Nothing more to load"
                    )
                  ) : (
                    <div
                      style={{ width: "100%", height: "auto", display: "flex" }}
                      className="card"
                    >
                      <img
                        src={country?.image}
                        style={{
                          width: "300px",
                          height: "200px",
                          marginRight: "15px",
                          border: "1px solid",
                        }}
                      />
                      <LazyCardContent
                        {...country}
                        onUpVote={() => handleVoteUp(country?.id)}
                      />
                      <LazyCardFooter
                        countryId={country?.id}
                        DeleteCountry={() => handleDeleteCountry(country?.id)}
                      />
                      <EditCountry
                        countryId={country?.id}
                        onCountryChange={handleEditCountry}
                        Updating={isUpdating}
                        // modalComp={Editmodal}
                        // ChangeModal={ChangeEditModal}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div>
        {isFetching && !isFetchingNextPage ? "Background Updating..." : null}
      </div>
    </>
  );
};
