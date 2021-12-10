import React from "react"
import {
  Select,
  VStack,
  CheckIcon,
  Center,
  NativeBaseProvider,
  usePropsResolution,
} from "native-base"


const Selection = ({getChoice}) => {
  let [service, setService] = React.useState("")
  const setCategory = (item) => {
    setService(item);
    getChoice(item);
  }

  return (
    <VStack space={4} backgroundColor = 'white' w = "80%">
      <Select
        selectedValue={service}
        accessibilityLabel="Choose Service"
        placeholder="게시물 카테고리"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => 
          setCategory(itemValue)
        }
      >
        <Select.Item label="커뮤니티" value="ux" />
        <Select.Item label="과외" value="web" />
        <Select.Item label="학교 행사" value="cross" />
        <Select.Item label="취미" value="ui" />
        <Select.Item label="진로" value="backend" />
      </Select>
    </VStack>
  )
}

export default Selection;