import React from "react";

import { ContentWrapper, SectionWrapper } from "./styles";
import Card from "./card/card";
import { useState, useEffect } from "react";
import { getData } from "./../../services/get";
import { useSelector } from "react-redux";

const Section = () => {
  const page = useSelector(state => state.changePage);
  const [section, setSection] = useState(page);
  const [data, setData] = useState();

  useEffect(() => {
    getResponse();
  }, []);

  const getResponse = async () => {
    const response = await getData();
    setData(response.DEVELOPMENT);
    console.log(response);
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
