import React from "react";
import { Helmet } from "react-helmet";
import { Facebook, Instagram, Linkedin, StackExchange } from "styled-icons/fa-brands";
import { Notes, Call, Email, LocationCity } from "styled-icons/material";

import { Colors } from "utils/constants";
import Link from "components/Link";
import GithubLanguages from "components/GithubLanguages";
import { GITHUB_KEY } from "./Emmanuel.constants";
import {
    PageGrid,
    CenteredCell,
    Title,
    Subtitle,
    RoundedImage,
    ProfileStyle,
} from "./Emmanuel.styles";

const urls = {
    education: "https://www.linkedin.com/in/emmanuel-ogbizi-ugbe#education",
    email: "mailto:eogbizi@gmail.com",
    experience: "https://www.linkedin.com/in/emmanuel-ogbizi-ugbe#experience",
    facebook: "https://www.facebook.com/Emmanuel.Ogbizi.Ugbe",
    github: "https://github.com/iamogbz",
    instagram: "https://instagram.com/iamogbz/",
    labs: "#/labs",
    location: "https://goo.gl/maps/3PpbgtsWnSQ2",
    stackexchange: "https://stackexchange.com/users/3690139/iamogbz",
    telephone: "tel:+1(289)700-5815",
};

const linkProps = {
    buttonHeight: "56px",
    buttonWidth: "200px",
    borderWidth: "2px",
    borderColor: Colors.LIGHT,
    fontColors: {
        initial: Colors.LIGHT,
        active: Colors.ACTIVE,
    },
    fontSize: "1.2vmax",
    target: "_blank",
};

const socialLinkProps = {
    ...linkProps,
    buttonHeight: "4vmax",
    buttonWidth: "4vmax",
    style: { margin: "8px" },
};

const iconLink = ([IconComponent, href]) => {
    const iconLinkProps = { ...socialLinkProps };
    if (href.startsWith("#")) delete iconLinkProps.target;
    return (
        <Link {...iconLinkProps} href={href} key={href}>
            <IconComponent size="2vmax" />
        </Link>
    );
};

const contactLinkProps = {
    ...linkProps,
    borderColor: Colors.NONE,
    buttonHeight: "40px",
    buttonWidth: "200px",
    fontSize: "1vmax",
};

const contactIconLink = ([IconComponent, href, text]) => (
    <CenteredCell height={1} width={4} key={text}>
        <Link {...contactLinkProps} href={href}>
            <IconComponent size="2vmax" style={{ marginRight: "16px" }} />
            {text}
        </Link>
    </CenteredCell>
);

export default function Emmanuel() {
    return [
        <Helmet key="profile-helmet">
            <title>Emmanuel Ogbizi-Ugbe</title>
        </Helmet>,
        <PageGrid key="profile-content" columns={12}>
            <CenteredCell height={1} width={12}>
                <RoundedImage
                    name="avatar"
                    size="30vmax"
                    type="jpg"
                    style={{ marginTop: "2vmax" }}
                />
            </CenteredCell>
            <CenteredCell
                height={1}
                width={12}
                style={{
                    flexDirection: "column",
                }}
            >
                <Title>Emmanuel Ogbizi-Ugbe</Title>
                <Subtitle>Consultant / Developer / Designer</Subtitle>
            </CenteredCell>
            <CenteredCell height={1} width={12}>
                <GithubLanguages authKey={GITHUB_KEY} />
            </CenteredCell>
            <CenteredCell height={1} width={12} />
            <CenteredCell height={1} width={3} />
            <CenteredCell height={1} width={12} />
            <CenteredCell height={1} width={12}>
                {[
                    [Linkedin, urls.experience],
                    [Facebook, urls.facebook],
                    [Notes, urls.labs],
                    [StackExchange, urls.stackexchange],
                    [Instagram, urls.instagram],
                ].map(iconLink)}
            </CenteredCell>
            {[
                [LocationCity, urls.location, "Toronto Ontario"],
                [Email, urls.email, "Send a message"],
                [Call, urls.telephone, "Call me"],
            ].map(contactIconLink)}
            <CenteredCell height={1} width={12} />
        </PageGrid>,
        <ProfileStyle key="profile-style" />,
    ];
}
