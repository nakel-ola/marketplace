import { StarFill } from "@/components/icons";
import { RatingCard } from "@/components/rating-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import React from "react";

type Props = {};
export const FilterSection = (props: Props) => {
  return (
    <div className="col-span-2 hidden lg:block">
      <Accordion
        type="multiple"
        className="w-full"
        value={["item-1", "item-2", "item-3", "item-4", "item-5", "item-6"]}
      >
        <AccordionItem value="item-1" defaultChecked>
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            {categories.map((category, index) => (
              <div key={index} className="py-2">
                <p className="text-base font-normal text-gray-600">
                  {category}
                </p>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" defaultChecked>
          <AccordionTrigger>Brands</AccordionTrigger>
          <AccordionContent>
            {brands.map((brand, index) => (
              <div key={index} className="py-2 flex items-center gap-2">
                <Checkbox id={`brand-${index}`} />
                <label
                  htmlFor={`brand-${index}`}
                  className="text-base font-normal text-dark leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {brand}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent>
            {features.map((feature, index) => (
              <div key={index} className="py-2 flex items-center gap-2">
                <Checkbox id={`feature-${index}`} />
                <label
                  htmlFor={`feature-${index}`}
                  className="text-base font-normal text-dark leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {feature}
                </label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" defaultValue="item-4">
          <AccordionTrigger>Price range</AccordionTrigger>
          <AccordionContent className="">
            <Slider defaultValue={[33, 66]} className="my-5" />

            <div className="flex items-center gap-2 my-2">
              <div className="">
                <label
                  htmlFor=""
                  className="text-dark text-base font-normal pl-1 pb-1"
                >
                  Min
                </label>
                <Input className="bg-white" placeholder="0" />
              </div>

              <div className="">
                <label
                  htmlFor=""
                  className="text-dark text-base font-normal pl-1 pb-1"
                >
                  Max
                </label>
                <Input className="bg-white" placeholder="99999" />
              </div>
            </div>

            <Button className="bg-white dark:bg-white/90 text-primary w-full">
              Apply
            </Button>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Condition</AccordionTrigger>
          <AccordionContent>
            <RadioGroup defaultValue="any" value="any">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={condition.toLowerCase()}
                    id={condition.toLowerCase()}
                  />
                  <label htmlFor="option-one">{condition}</label>
                </div>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>Ratings</AccordionTrigger>
          <AccordionContent>
            {[5, 4, 3, 2].map((value, index) => (
              <div key={index} className="flex items-center py-2">
                <Checkbox id={`rating-${index}`} />

                <RatingCard className="ml-2" active={value} />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const categories = [
  "Mobile accessory",
  "Electronics",
  "Smartphones",
  "Modern tech",
  "Equipments",
  "Home items",
  "TV sets",
  "Microchips",
];

const brands = [
  "Samsung",
  "Apple",
  "Huawei",
  "Pocco",
  "Lenovo",
  "Xiaomi",
  "One plus",
  "Nothing",
];

const features = [
  "Metallic",
  "Plastic cover",
  "8GB Ram",
  "Super power",
  "Battery included",
  "Large Memory",
];

const conditions = ["Any", "Refurbished", "Brand new", "Old items"];
