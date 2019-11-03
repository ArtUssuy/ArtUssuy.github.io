import React from "react";

import { ContentWrapper, SectionWrapper } from "./styles";
import Card from "./card/card";
import { useState, useEffect } from "react";
import { getPhotograph, getDevelopment } from "./../../services/get";
import { useSelector } from "react-redux";

const Section = () => {
  const page = useSelector(state => state.changePage);
  const [section, setSection] = useState(page);
  const [data, setData] = useState();

  useEffect(() => {
    getSection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const photograph = async () => {
    const response = await getPhotograph();
    setData(response);
    console.log(response);
  };

  const development = async () => {
    const response = await getDevelopment();
    setData(response);
    console.log(response);
  };

  const getSection = () => {
    setSection(page);
    switch (page) {
      case "Photograph":
        photograph();
        return;
      case "Development":
        development();
        return;
      default:
        return page;
    }
  };

  return (
    <>
      <SectionWrapper key={section}>
        <ContentWrapper>
          {data
            ? data.map(content => <Card content={content} key={content.id} />)
            : ""}
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};

export default Section;
