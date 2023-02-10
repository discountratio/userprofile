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
export default function LanguageSlider(props) {
  const [sliderValue, setSliderValue] = React.useState(1);
  const [showTooltip, setShowTooltip] = React.useState(false);

  // props.setLanguageLevel(sliderValue)

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
        value={sliderValue}
        onChange={handleSliderChange}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}>
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
      <Text>{languageLevels[sliderValue]}</Text>
    </Flex>
  );
}
