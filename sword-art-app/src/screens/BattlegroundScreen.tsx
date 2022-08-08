import React, { useRef, useState } from "react";
import { Box, Text, Flex} from '@chakra-ui/react';
import { useInterval } from "../hooks/useInterval";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const BattlegroundScreen = ({ setWinner, winner}) => {
  const battleCharacters = useSelector((store: any) => store.characters.battleCharacters);
  const [fighter1,fighter2] = battleCharacters;
  const [firstAttacks, setFirstAttacks] = useState(false);
  const [secondAttacks, setSecondAttacks] = useState(false);
  const attacksByFighterOne = useRef(0);
  const attacksByFighterTwo = useRef(0);
  const navigate = useNavigate();

  const isLoggedIn = useSelector((store: any) => store.login.isLoggedIn);
  if (!isLoggedIn) {
    navigate("/");
  }


  const handleFightersClash = () => {
    const {name, damagePerHit} = fighter1;
    setSecondAttacks(false);
    setFirstAttacks(true);
    attacksByFighterOne.current += 1;
    if(fighter2.health - damagePerHit * attacksByFighterOne.current <= 0) {
      setWinner(name);
      navigate("/winner")
      return;
    }
      setTimeout(() => handleSecondFighterAttack(), 2000)
  };

  useInterval(() => handleFightersClash(), winner ? null : 4000);

  const handleSecondFighterAttack = () => {
    const {name, damagePerHit} = fighter2;
    setFirstAttacks(false);
    setSecondAttacks(true);
    attacksByFighterTwo.current += 1;
    if(fighter1.health - damagePerHit * attacksByFighterTwo.current <= 0) {
      setWinner(name);
      navigate("/winner")
      return;
    }
    
  }

  return (
    <Flex justify={"center"} direction="column" align={"center"} h="100vh">
        <Text mt={"2%"} fontSize={"3xl"} fontWeight={"700"}>
          Lets get ready to rumble
        </Text>
        <Text mt={"2%"} fontSize={"2xl"} fontWeight={"600"}>
          {fighter1.name} Health:{" "} 
          {fighter1.health - fighter2.damagePerHit * attacksByFighterTwo.current} 
        </Text>
        <Text mt={"2%"} fontSize={"2xl"} fontWeight={"600"}>
          {fighter2.name} Health:{" "} 
          {fighter2.health - fighter1.damagePerHit * attacksByFighterOne.current} 
        </Text>
    <Box w={"80%"} h={"100%"} mt={"5%"} border="0.5rem dotted black">
        {firstAttacks ? <Text mt={"1%"} fontSize={"2xl"} fontWeight={"600"}>
          {fighter1.name} strikes {fighter2.name} for{" "}
          {fighter1.damagePerHit}
        </Text> : null}
        {secondAttacks ? <Text mt={"37%"} fontSize={"2xl"} fontWeight={"600"}>
          {fighter2.name} strikes {fighter1.name} for{" "}
          {fighter2.damagePerHit}
        </Text> : null}
    </Box>
    </Flex>
  );
};
