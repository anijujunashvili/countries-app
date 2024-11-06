import { lazy, useReducer, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { heroText } from "@/translation/global.ts";
import AddCountry from "../components/add-country/add-country";
import EditCountry from "../components/edit-country/edit-country.tsx";
import countryReducer from "../components/card/reducer/reducer.ts";
import { common } from "@/translation/global.ts";
import axios from "axios";
import { getCountries } from "@/api/countries/index.ts";
import { useQuery } from "@tanstack/react-query";

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

export const HomePageView = () => {
  const [modalComp, setModalComp] = useState(false);
  //const [Editmodal, setEditModal] = useState(false);
  const [countriesList, dispatch] = useReducer(countryReducer, []);

  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["countries-list"],
  //   queryFn: getCountries,
  //   retry: 0,
  // });

  // console.log("country list:", data);
  // console.log("isLoading:", isLoading);
  // console.log("is error:", isError);

  useEffect(() => {
    axios.get("http://localhost:3000/countriesList").then((res) => {
      const initial = res.data;
      dispatch({ type: "set_data", payload: { initial } });
    });
  }, []);

  const params = useParams();
  const lang = params.lang as string;
  const lng = params.lang as keyof typeof common;

  const handleVoteUp = (id: string) => {
    if (id) {
      dispatch({ type: "upvote", payload: { id } });
    }
  };

  const handleSort = (sortType: "asc" | "desc") => {
    dispatch({ type: "sort", payload: { sortType } });
  };

  const handleNewCountry = (countryFields: {
    name: string;
    nameEn: string;
    capital: string;
    capitalEn: string;
    population: string;
    image: string;
  }) => {
    const new_obj = {
      id: (Number(countriesList.at(-1)?.id) + 1).toString(),
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
    };

    axios.post("http://localhost:3000/countriesList", new_obj).then(() => {
      dispatch({ type: "add", payload: { countryFields, lang } });
    });

    setModalComp(false);
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
    const new_obj = {
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
    };
    axios
      .patch(`http://localhost:3000/countriesList/${countryFields.id}`, new_obj)
      .then(() => {
        dispatch({ type: "edit", payload: { countryFields } });
      });
    //setEditModal(false);
  };

  const handleDeleteCountry = (id: string) => {
    dispatch({ type: "delete", payload: { id } });

    axios.delete(`http://localhost:3000/countriesList/${id}`).then(() => {});
  };

  const handleDeletedCountry = (id: string) => {
    dispatch({ type: "restore", payload: { id } });
  };
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

  const ChangeModal = (modal: boolean) => {
    setModalComp(!modal);
  };

  // const ChangeEditModal = (modal: boolean) => {
  //   setEditModal(!modal);
  // };

  return (
    <>
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
        />
      </div>
      <div className="container">
        {countriesList
          .sort((a: Countries, b: Countries) => {
            return a.disabled - b.disabled;
          })
          .map((country_item: Countries) => (
            <LazyCard key={country_item.id}>
              {country_item.disabled ? (
                <div className="disabled">
                  <div
                    className="restore"
                    onClick={() => handleDeletedCountry(country_item.id)}
                  >
                    {common[lng].restore}
                  </div>
                </div>
              ) : (
                ""
              )}
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
                // modalComp={Editmodal}
                // ChangeModal={ChangeEditModal}
              />
            </LazyCard>
          ))}
      </div>
    </>
  );
};
