import { lazy, useState } from "react";
import { useParams } from "react-router-dom";
import { heroText } from "@/translation/global.ts";
import AddCountry from "../components/add-country/add-country";
import EditCountry from "../components/edit-country/edit-country.tsx";
//import countryReducer from "../components/card/reducer/reducer.ts";
import { common } from "@/translation/global.ts";
//import axios from "axios";
import {
  deleteCountry,
  getCountries,
  updateCountry,
  addCountry,
} from "@/api/countries/index.ts";
import { useQuery, useMutation } from "@tanstack/react-query";

const LazyHero = lazy(() => import("@/pages/home/components/hero"));
const LazyCard = lazy(() => import("@/pages/home/components/card/card"));
const LazyCardContent = lazy(
  () => import("@/pages/home/components/card/card-content"),
);
const LazyCardHeader = lazy(
  () => import("@/pages/home/components/card/card-header"),
);
const LazyCardFooter = lazy(
  () => import("@/pages/home/components/card/card-footer"),
);

type nameType = {
  ka: string;
  en: string;
};
type capitalType = {
  ka: string;
  en: string;
};
type Countries = {
  id: string;
  name: nameType;
  population: string;
  flag: string;
  capital: capitalType;
  disabled: number;
  intro: nameType;
  image: string;
  uploaded: number;
  vote: number;
};

export const HomePageView = () => {
  const [modalComp, setModalComp] = useState(false);
  //const [Editmodal, setEditModal] = useState(false);
  //const [countriesList, dispatch] = useReducer(countryReducer, []);

  const {
    data: countriesList,
    isLoading: getLoading,
    isError: getIserror,
    refetch: getRefetch,
  } = useQuery({
    queryKey: ["countries-list"],
    queryFn: getCountries,
    gcTime: 1000 * 5,
    staleTime: 1000 * 5,
    retry: 0,
    refetchOnWindowFocus: false,
  });

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
  // const lang = params.lang as string;
  const lng = params.lang as keyof typeof common;

  const handleVoteUp = (id: string) => {
    if (id) {
      const newVote = countriesList?.find((c: Countries) => {
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

  const handleSort = (sortType: "asc" | "desc") => {
    countriesList?.sort((a: Countries, b: Countries) => {
      return sortType == "asc" ? a.vote - b.vote : b.vote - a.vote;
    });
    // dispatch({ type: "sort", payload: { sortType } });
  };

  const handleNewCountry = (countryFields: {
    name: string;
    nameEn: string;
    capital: string;
    capitalEn: string;
    population: string;
    image: string;
  }) => {
    // const new_obj = {
    //   id: (Number(countriesList?.at(-1)?.id) + 1).toString(),
    //   name: {
    //     ka: countryFields.name,
    //     en: countryFields.nameEn,
    //   },
    //   capital: {
    //     ka: countryFields.capital,
    //     en: countryFields.capitalEn,
    //   },
    //   population: countryFields.population,
    //   image: countryFields.image,
    //   intro: {
    //     ka: countryFields.name,
    //     en: countryFields.nameEn,
    //   },
    //   flag: "georgia.png",
    //   vote: 0,
    //   disabled: 0,
    //   uploaded: 0,
    // };
    addMutation(
      {
        payload: {
          id: (Number(countriesList?.at(-1)?.id) + 1).toString(),
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

  // const ChangeEditModal = (modal: boolean) => {
  //   setEditModal(!modal);
  // };

  if (getLoading) {
    return <div>Loading...</div>;
  }

  if (getIserror) {
    return <div>Error</div>;
  }
  return (
    <>
      {isDeleting ? "მიმდინარეობას ქვეყნის წაშლა" : ""}
      {isDeleteError ? "ვერ მოხერხდა ქვენის წაშლა" : ""}
      {isAddError ? "ვერ მოხერხდა ქვეყნის დამატება" : ""}
      {isUpdateError ? "სამწუხაროდ ვერ მოხერხდა ქვეყნის რედაქტირება" : ""}
      <LazyHero heroText={heroText[lng]} />
      <div className="container">
        <button
          onClick={() => handleSort("asc")}
          style={{ marginRight: "15px" }}
        >
          {common[lng].sort_asc}
        </button>
        <button onClick={() => handleSort("desc")}>
          {common[lng].sort_desc}
        </button>
        <AddCountry
          onCountryCreate={handleNewCountry}
          modalComp={modalComp}
          ChangeModal={ChangeModal}
          addLoading={isAdding}
        />
      </div>
      <div className="container">
        {countriesList?.map((country_item: Countries) => (
          <LazyCard key={country_item.id}>
            <LazyCardHeader
              image={country_item.image}
              uploaded={country_item.uploaded}
            />
            <LazyCardContent
              {...country_item}
              onUpVote={() => handleVoteUp(country_item.id)}
            />
            <LazyCardFooter
              countryId={country_item.id}
              DeleteCountry={() => handleDeleteCountry(country_item.id)}
            />
            <EditCountry
              countryId={country_item.id}
              onCountryChange={handleEditCountry}
              Updating={isUpdating}
              // modalComp={Editmodal}
              // ChangeModal={ChangeEditModal}
            />
          </LazyCard>
        ))}
      </div>
    </>
  );
};
