import React from "react";
import { Collapse } from "antd";
const text = `
Recurring donations are auto-charged repeatedly on periodically basis. Once subscribed, donations will be charged automatically from your card/account at the selected intervals. For example, if you choose the Monthly Recurring option, the first payment will be charged right away and the next payment will be automatically charged after one month from the card/account.
`;
const items = [
  {
    key: "1",
    label: "What is meant by Recurring donation?",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "What is Be A Sponsor?",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "Can I cancel recurring donation subscription?",
    children: <p>{text}</p>,
  },
];
const Faqs = () => <Collapse accordion items={items} />;
export default Faqs;
