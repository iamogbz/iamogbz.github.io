import React from "react";
import { Helmet } from "react-helmet";
import {
    Facebook,
    Github,
    Instagram,
    StackExchange,
} from "styled-icons/fa-brands";
import { Call, Email, LocationCity } from "styled-icons/material";

import { Colors } from "utils/constants";
import Link from "components/Link";
import GithubLanguages from "components/GithubLanguages";
import { GITHUB_KEY_RO } from "./Emmanuel.constants";
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
    experience: "https://www.linkedin.com/in/emmanuel-ogbizi-ugbe#experience",
    facebook: "https://www.facebook.com/Emmanuel.Ogbizi.Ugbe",
    github: "https://github.com/iamogbz",
    instagram: "https://instagram.com/iamogbz/",
    stackexchange: "https://stackexchange.com/users/3690139/iamogbz",
    location: "https://goo.gl/maps/3PpbgtsWnSQ2",
    telephone: "tel:+1(289)700-5815",
    email: "mailto:eogbizi@gmail.com",
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

const socialIconLink = ([IconComponent, href]) => (
    <Link {...socialLinkProps} href={href} key={href}>
        <IconComponent size="2vmax" />
    </Link>
);

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

export default function() {
    return [
        <Helmet>
            <title>Emmanuel Ogbizi-Ugbe</title>
        </Helmet>,
        <PageGrid key="profile-content" columns={12}>
            <CenteredCell height={1} width={12}>
                <RoundedImage
                    name="avatar"
                    size="30vmax"
                    type="jpg"
                    style={{ marginTop: "20vmax" }}
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
                <GithubLanguages authKey={GITHUB_KEY_RO} />
            </CenteredCell>
            <CenteredCell height={1} width={12} />
            <CenteredCell height={1} width={3} />
            {["experience", "education"].map(a => (
                <CenteredCell height={1} width={3} key={a}>
                    <Link {...linkProps} href={urls[a]}>
                        {a}
                    </Link>
                </CenteredCell>
            ))}
            <CenteredCell height={1} width={3} />
            <CenteredCell height={1} width={12} />
            <CenteredCell height={1} width={12}>
                {[
                    [Facebook, urls.facebook],
                    [Github, urls.github],
                    [StackExchange, urls.stackexchange],
                    [Instagram, urls.instagram],
                ].map(socialIconLink)}
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
