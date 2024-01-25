import {OrbitControls, Stage} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import React from "react";
import {Atom} from "../3dModels";
import styled from "styled-components";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 50px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const Development = () => {
  return (
    <>
      <Canvas>
        <Stage environment={"city"} intensity={10}>
          <Atom />
          <OrbitControls enableZoom={false} autoRotate />
        </Stage>
      </Canvas>

    </>
  );
};
