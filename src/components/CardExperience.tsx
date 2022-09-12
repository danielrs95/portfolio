/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";
import "../styles/CardExperience.less";
import { GithubOutlined, GlobalOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Text } = Typography;

type CardExperienceProps = {
  titleProject: string;
  techUsed: string;
  image: string;
  webProject: string | undefined;
};

const CardExperience: FC<CardExperienceProps> = ({
  titleProject,
  techUsed,
  image,
  webProject,
}) => {
  return (
    <section className="cards">
      <article className="card">
        <div
          className="card__info-hover"
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            color: "#005A8D",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          <span>Go to website </span>
          <GlobalOutlined style={{ marginLeft: "0.2rem" }} />
        </div>
        <div
          className="card__img"
          style={{
            backgroundImage: `url(${image} )`,
            backgroundSize: "cover",
          }}
        />
        <a
          href={webProject}
          className="card_link"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className="card__img--hover"
            style={{
              backgroundImage: `url(${image} )`,
              backgroundSize: "cover",
            }}
          />
        </a>
        <div className="card__info">
          <span className="card__category">{titleProject}</span>
          <h3 className="card__title">{techUsed}</h3>
          <Text className="card__by" type="secondary">
            Check the repository on{" "}
            <a
              href="https://github.com/danielrs95/MERN_ECOMMERCE"
              className="card__author"
              title="Github"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <GithubOutlined
                style={{ marginLeft: "0.2rem", fontSize: "0.75rem" }}
              />
            </a>
          </Text>
        </div>
      </article>
    </section>
  );
};

export default CardExperience;
