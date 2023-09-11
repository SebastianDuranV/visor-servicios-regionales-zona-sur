"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import React from "react";
import { Nav, Button, Container,Col, Row } from "react-bootstrap";
import  HeadFuction  from "./components/headFunction/head";
import FooterFuction from "./components/footerFuction/footer";

export default function Dashboard() {
    return(
        <>
        <HeadFuction></HeadFuction>
        <FooterFuction></FooterFuction>
        </>
    );
}