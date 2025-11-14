"use client";
import styled from "styled-components";

const panel  = "#1b1c1f";
const panel2 = "#232429";
const stroke = "#2d2f34";
const text   = "#f3f3f3";
const accent = "#87C62E";

export const Shell = styled.div`
  width: 100%;
  max-width: 640px;             
  margin: 16px auto;
  padding-inline: 12px;

  @media (min-width: 768px) {
    --gutter: 12px;
    position: relative;
    width: calc(100vw - (var(--gutter) * 2));
    max-width: none;            
    left: 50%;
    margin: 16px 0;             
    margin-left: calc(-50vw + var(--gutter));
    margin-right: calc(-50vw + var(--gutter));
    padding-inline: 0;          
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${panel};
  color: ${text};
  border: 1px solid ${stroke};
  border-radius: 14px;
  padding: 10px 14px;
  box-shadow: 0 6px 18px rgba(0,0,0,.25);
`;

export const IconButton = styled.button`
  background: transparent;
  border: 0;
  color: ${text};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 10px;
  cursor: pointer;
  transition: background .2s ease, opacity .2s ease;
  svg { width: 26px; height: 26px; }
  &:hover { background: #22252b; }
  &:active { opacity: .9; }
  &:focus-visible { outline: none; box-shadow: 0 0 0 3px rgba(135,198,46,.35); }
`;

export const Brand = styled.h1`
  margin: 0;
  flex: 1;
  text-align: center;
  font-weight: 700;
  font-size: 1.05rem;
  letter-spacing: .2px;
`;

export const Collapse = styled.div`
  overflow: hidden;
  border: 1px solid ${stroke};
  border-top: none;
  border-radius: 0 0 14px 14px;
  background: ${panel};
  transition: max-height .28s ease;
  max-height: 0;

  &[data-open="true"] {
    max-height: 320px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 6px 0;
`;

export const MenuItem = styled.li`
  padding: 14px 16px;
  color: ${text};
  font-weight: 700;
  text-align: center;
  border-top: 1px solid ${stroke};
  background: ${panel};
  &:first-child { border-top: 0; }
  &:hover { background: ${panel2}; }
  &:focus-visible { outline: none; box-shadow: inset 0 0 0 3px rgba(135,198,46,.35); }
`;
