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
    stackexchange: "http://stackexchange.com/users/3690139/iamogbz",
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
};

const socialIconProps = {
    size: 16,
};

export default function() {
    return [
        <PageGrid columns={12}>
            <CenteredCell height={5} width={12} />
            <CenteredCell height={10} width={12}>
                <RoundedImage name="avatar" size="240" type="jpg" />
            </CenteredCell>
            <CenteredCell height={2} width={12}>
                <Title>Emmanuel Ogbizi-Ugbe</Title>
                <Subtitle>Consultant / Developer / Designer</Subtitle>
            </CenteredCell>
            <CenteredCell height={1} width={12} />
            <CenteredCell height={1} width={6}>
                <Link {...linkProps} href={urls.experience}>
                    experience
                </Link>
            </CenteredCell>
            <CenteredCell height={1} width={6}>
                <Link {...linkProps} href={urls.education}>
                    education
                </Link>
            </CenteredCell>
            <CenteredCell height={3} width={12} />
            <CenteredCell height={1} width={3}>
                <Link {...socialLinkProps} href={urls.facebook}>
                    <Facebook {...socialIconProps} />
                </Link>
            </CenteredCell>
            <CenteredCell height={1} width={3}>
                <Link {...socialLinkProps} href={urls.github}>
                    <Github {...socialIconProps} />
                </Link>
            </CenteredCell>
            <CenteredCell height={1} width={3}>
                <Link {...socialLinkProps} href={urls.stackexchange}>
                    <StackExchange {...socialIconProps} />
                </Link>
            </CenteredCell>
            <CenteredCell height={1} width={3}>
                <Link {...socialLinkProps} href={urls.instagram}>
                    <Instagram {...socialIconProps} />
                </Link>
            </CenteredCell>
            <CenteredCell height={1} width={12} />
        </PageGrid>,
        <ProfileStyle />,
    ];
}
