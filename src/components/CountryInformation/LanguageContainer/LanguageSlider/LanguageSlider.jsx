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
import 
{
    TriangleUpIcon,
} from "@chakra-ui/icons";
export default function LanguageSlider() {
  const [sliderValue, setSliderValue] = React.useState(5);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const languageLevels = {
    0: "None",
    1: "Beginner",
    2: "Working",
    3: "Professional",
    4: "Fluent",
    5: "Native",
  };

  return (

    <Slider
    id='slider'
      defaultValue={0}
      min={0}
      max={5}
        w='200px'
      borderRadius='full'
        
      colorScheme='teal'
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}>

    {/*Turned off tick marks  */}
      {/* <SliderMark value={0} mt='1' ml='-2.5' fontSize='sm'>
        0
      </SliderMark>
      <SliderMark value={1} mt='1' ml='-2.5' fontSize='sm'>
        1
      </SliderMark>
      <SliderMark value={2} mt='1' ml='-2.5' fontSize='sm'>
        2
      </SliderMark>
      <SliderMark value={3} mt='1' ml='-2.5' fontSize='sm'>
        3
      </SliderMark>

      <SliderMark value={4} mt='1' ml='-2.5' fontSize='sm'>
        4
      </SliderMark>

      <SliderMark value={5} mt='1' ml='-2.5' fontSize='sm'>
        5
      </SliderMark> */}

      <SliderTrack bg='tomato'
      h='2'
      >
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='teal.500'
        color='white'
        placement='bottom'
        isOpen={showTooltip}
        label={`${languageLevels[sliderValue]}`}>
       
        <SliderThumb 
            _hover={{
                boxShadow: "0 0 1px 2px #000",
                }}
            _active={{
                boxShadow: "0 0 1px 2px #000",
                }}

            _focus={{
                boxShadow: "0 0 1px 2px #000",
                }}

        >
            </SliderThumb>
      </Tooltip>
    </Slider>
  );
}
