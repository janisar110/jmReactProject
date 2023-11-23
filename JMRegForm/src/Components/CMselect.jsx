import { Select, Option } from "@material-tailwind/react";

const CMselect = (props) => {
  return (
    <div className="w-[37rem]">
    <Select label={props.type}>
      <Option>{props.option.first}</Option>
      <Option>{props.option.second}</Option>
      <Option>{props.option.third}</Option>
      <Option>{props.option.forth}</Option>
      
    </Select>
  </div>
  )
}

export default CMselect
