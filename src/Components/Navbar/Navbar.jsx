import { Button, Menu } from "antd";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Menu
        mode="horizontal"
        items={[
          { label: "Home", key: "home" },
          { label: "About", key: "about" },
          {
            label: "Services",
            key: "services",
            children: [
              {
                label: "Health",
                key: "health",
                children: [
                  { label: "Health Department", key: "health department" },
                  { label: "Blood Bank", key: "blood bank" },
                  { label: "Hijama", key: "hijama" },
                  { label: "X-Ray & Ultra-sound", key: "x-ray" },
                  { label: "Mobile Health care", key: "mobile health care" },
                ],
              },
              {
                label: "Education",
                key: "education",
                children: [
                  {
                    label: "Saylani Schooling System",
                    key: "saylani schooling system",
                  },
                  {
                    label: "Vocational Training",
                    key: "vocational training",
                    children: [
                      {
                        label: "Textile Training Program",
                        key: "textile training program",
                      },
                      {
                        label: "Mobile Repair Training",
                        key: "mobile repair training   ",
                      },
                    ],
                  },
                  {
                    label: "Technical Education",
                    key: "technical education",
                    children: [
                      {
                        label: "Saylani Mass IT Training ",
                        key: "saylani mass it training",
                      },
                      { label: "PIAIC", key: "piaic" },
                    ],
                  },
                  {
                    label: "Islamic Education",
                    key: "islamic education",
                    children: [
                      { label: "Madarisa", key: "madrasia" },
                      {
                        label: "Online Quran Academy",
                        key: "online quran academy",
                      },
                    ],
                  },
                  {
                    label: "Acounting And Finance",
                    key: "acounting ",
                    children: [{ label: "SBIL", key: "sbil" }],
                  },
                ],
              },
              {
                label: "Food",
                key: "food",
                children: [
                  { label: "Family Support - Ration", key: "family support" },
                  { label: "Saylani DastarKhwan", key: "saylani dastarkhwan" },
                  { label: "Saylani Breakfast", key: "saylani breakfast" },
                  { label: "Saylani Rooti Bank", key: "saylani rooti bank" },
                ],
              },
              {
                label: "Sadiqah Jariah",
                key: "sadiqah jariah",
                children: [
                  {
                    label: "Construction of Masjid",
                    key: "construction of masjid",
                  },
                  {
                    label: "Clean Drinking Water",
                    key: "clean drinking water",
                  },
                  { label: "Plantation - Green Pakistan", key: "plantation" },
                ],
              },
              {
                label: "Social Welfare",
                key: "social welfare ",
                children: [
                  { label: "Kafalat Program", key: "kafalat program" },
                  {
                    label: "Wedding Support Program",
                    key: "weding support program  ",
                  },
                  { label: "Apna Karoobar", key: "apna kroobar" },
                  { label: "SaylaniJob Bank", key: "saylani jon bank" },
                ],
              },
              { label: "Disaster Aid", key: "disaster aid" ,
              children:[
                {label:"Corona Relief Program" , key:"corona relief program"},
                {label:"Flood Relief Program" , key:"flood   relief program"},
              ]
            },
              { label: "Saylani Ehsas", key: "sylani ehsas",
              children:[
                {label:"Langar Khana" , key:"langar khana"},
                {label:"Panah gaah" , key:"panah gaah"},
                {label:"Koe Bhooka Na Soye Ga" , key:"koe bhooka na soye ga"},
              ]
             },
            ],
          },
          {
            label: "Media",
            key: "media",
            children: [
              { label: "Videos", key: "videos" },
              { label: "Books", key: "books" },
            ],
          },
          { label: "News", key: "news" },
          { label: "Contact Us", key: "contact us",
          children:[
            {label:"Contact Us " , key:"contact us"},   
            {label:"Branches" , key:"branches"}, 
          ]
         },
          { label: "Bank Details", key: "bank details" },
        ]}
      ></Menu>
      <Button type="dashed">hey </Button>
    </>
  );
};

export default Navbar;
