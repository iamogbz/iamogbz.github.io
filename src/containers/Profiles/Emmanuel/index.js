import React from "react";
import {
    Facebook,
    Github,
    Instagram,
    StackExchange,
} from "styled-icons/fa-brands";

import Link from "components/Link";
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
};

const linkProps = {
    buttonHeight: 56,
    buttonWidth: 200,
    borderWidth: 2,
    borderColor: "white",
    fontColors: {
        initial: "white",
        active: "#2386F1",
    },
    fontSize: 12,
};

const socialLinkProps = {
    ...linkProps,
    buttonHeight: 32,
    buttonWidth: 32,
    borderWidth: 2,
    borderColor: "white",
    fontColors: {
        initial: "white",
        active: "#2386F1",
    },
    style: { margin: "8px" },
};

const socialIconLink = ([IconComponent, href]) => (
    <Link {...socialLinkProps} href={href} key={href}>
        <IconComponent size={16} />
    </Link>
);

export default function() {
    return [
        <PageGrid key="profile-content" columns={12}>
            <CenteredCell height={5} width={12} />
            <CenteredCell height={10} width={12}>
                <RoundedImage name="avatar" size="240" type="jpg" />
            </CenteredCell>
            <CenteredCell
                height={2}
                width={12}
                style={{
                    flexDirection: "column",
                }}
            >
                <Title>Emmanuel Ogbizi-Ugbe</Title>
                <Subtitle>Consultant / Developer / Designer</Subtitle>
            </CenteredCell>
            <CenteredCell height={1} width={12} />
            <CenteredCell height={1} width={3} />
            <CenteredCell height={1} width={3}>
                <Link {...linkProps} href={urls.experience}>
                    experience
                </Link>
            </CenteredCell>
            <CenteredCell height={1} width={3}>
                <Link {...linkProps} href={urls.education}>
                    education
                </Link>
            </CenteredCell>
            <CenteredCell height={1} width={3} />
            <CenteredCell height={3} width={12} />
            <CenteredCell height={1} width={12}>
                {[
                    [Facebook, urls.facebook],
                    [Github, urls.github],
                    [StackExchange, urls.stackexchange],
                    [Instagram, urls.instagram],
                ].map(socialIconLink)}
            </CenteredCell>
            <CenteredCell height={1} width={12} />
        </PageGrid>,
        <ProfileStyle key="profile-style" />,
    ];
}
