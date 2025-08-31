import React from "react";
import { useGLTF } from "@react-three/drei";

export function Car(props) {
	const { nodes, materials } = useGLTF("/models/dodge-challenger-model.glb");
	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]} scale={0.166}>
				<mesh
					geometry={nodes.Object_2.geometry}
					material={materials.pCube156SG}
				/>
				<mesh
					geometry={nodes.Object_3.geometry}
					material={materials.pCube156SG1}
				/>
				<mesh
					geometry={nodes.Object_4.geometry}
					material={materials.pCube156SG2}
				/>
				<mesh
					geometry={nodes.Object_5.geometry}
					material={materials.pCube157SG}
				/>
				<mesh
					geometry={nodes.Object_6.geometry}
					material={materials.pCube157SG1}
				/>
				<mesh
					geometry={nodes.Object_7.geometry}
					material={materials.pPipe1SG}
				/>
				<mesh
					geometry={nodes.Object_8.geometry}
					material={materials.pCylinder13SG}
				/>
				<mesh
					geometry={nodes.Object_9.geometry}
					material={materials.pCylinder13SG}
				/>
				<mesh
					geometry={nodes.Object_10.geometry}
					material={materials.pPipe1SG}
				/>
				<mesh
					geometry={nodes.Object_11.geometry}
					material={materials.pPipe1SG}
				/>
				<mesh
					geometry={nodes.Object_12.geometry}
					material={materials.pPipe1SG}
				/>
				<mesh
					geometry={nodes.Object_13.geometry}
					material={materials.pPipe1SG1}
				/>
				<mesh
					geometry={nodes.Object_14.geometry}
					material={materials.pPipe1SG2}
				/>
				<mesh
					geometry={nodes.Object_15.geometry}
					material={materials.polySurface29SG}
				/>
				<mesh
					geometry={nodes.Object_16.geometry}
					material={materials.polySurface29SG}
				/>
			</group>
		</group>
	);
}

useGLTF.preload("/models/dodge-challenger-model.glb");
