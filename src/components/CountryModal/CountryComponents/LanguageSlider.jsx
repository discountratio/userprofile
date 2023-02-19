import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
  Text,
  Tooltip,
  Flex,
} from "@chakra-ui/react";
import { useEffect } from "react";
export default function LanguageSlider(props) {
  const [sliderValue, setSliderValue] = React.useState(props.languageLevel);
  

  const languageLevels = {
    1: "Beginner",
    2: "Working",
    3: "Professional",
    4: "Fluent",
    5: "Native",
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
    props.setLanguageLevel(value * 20);
  };

  return (
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      w='100%'>
      <Slider
        id='slider'
        defaultValue={1}
        min={1}
        max={5}
        w='300px'
        borderRadius='full'
        value={
          !props.languageLevel ? 1 : props.languageLevel / 20
        }
        onChange={handleSliderChange}>
        <SliderTrack bg='gray.300' h='2'>
          <SliderFilledTrack bg='blue.300' />
        </SliderTrack>

        <SliderThumb
          border='4px'
          borderColor='blue.300'
          _hover={{
            boxShadow: "0 0 1px 2px #000",
          }}
          _active={{
            boxShadow: "0 0 1px 2px #000",
          }}
          _focus={{
            boxShadow: "0 0 1px 2px #000",
          }}></SliderThumb>
      </Slider>
      <Text>{
        !props.languageLevel
          ? languageLevels[1]
          : languageLevels[props.languageLevel / 20]

      }
      </Text>
    </Flex>
  );
}
