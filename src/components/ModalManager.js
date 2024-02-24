import { InventorySystem } from "./projects/InventorySystem";
import { Tetris } from "./projects/Tetris";

const ModalManager = ({ project = '' }) => {

  console.log('clicked project ' + project);

  return (
    <>
      <InventorySystem
        open={project === 'Inventory System'} />

      <Tetris
        open={project === 'Tetris'} />
    </>
  );
}

export default ModalManager;