import machines from '../data/machines';
import MachineCard from '../components/MachineCard';

function Home() {
  return (
    <div className="flex flex-wrap items-center justify-center h-screen">
      {machines.map((machine) => {
        return (
          <MachineCard
            key={machine.serial_no}
            wc={machine.work_center}
            manufacturer={machine.manufacturer}
            model={machine.model}
            serial={machine.serial_no}
          />
        );
      })}
    </div>
  );
}

export default Home;
