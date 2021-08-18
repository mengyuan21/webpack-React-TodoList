import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import "./TodoFilter";
import userEvent from '@testing-library/user-event'
import App from "./App.js"