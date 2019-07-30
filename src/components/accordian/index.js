import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import ProjectSettings from "../settings/project-settings";

export default function Accordian() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Settings</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel onClick={() => ProjectSettings()}>
          Project Settings
        </AccordionItemPanel>
        <AccordionItemPanel>Application Settings</AccordionItemPanel>
        <AccordionItemPanel>Roles Management</AccordionItemPanel>
        <AccordionItemPanel>User Management</AccordionItemPanel>
        <AccordionItemPanel>Execution Environments</AccordionItemPanel>
        <AccordionItemPanel>Suite Category</AccordionItemPanel>
        <AccordionItemPanel>Mobile Infra</AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>My Applications</AccordionItemButton>
        </AccordionItemHeading>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Test Suite</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>Standard</AccordionItemPanel>
        <AccordionItemPanel>Scheduled Execution</AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Test Run Analysis</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>Functional Execution</AccordionItemPanel>
        <AccordionItemPanel>Performance Execution</AccordionItemPanel>
        <AccordionItemPanel>Search Test Run</AccordionItemPanel>
        <AccordionItemPanel>All Execution</AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Reports Dashboard</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>Release Trend</AccordionItemPanel>
        <AccordionItemPanel>Run Trend</AccordionItemPanel>
        <AccordionItemPanel>Failure Analysis</AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Test Flow Design</AccordionItemButton>
        </AccordionItemHeading>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Locator Strategy</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>Locator Time Analysis</AccordionItemPanel>
        <AccordionItemPanel>Locator Success Analysis</AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Database Testing</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>Setup</AccordionItemPanel>
        <AccordionItemPanel>Test Case Definition</AccordionItemPanel>
        <AccordionItemPanel>HDFS</AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
