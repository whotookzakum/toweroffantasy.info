import { ModalMenu } from "../components/Modal";
import { MOUNTS } from "../data/en-US/mounts/mountList";


function Mounts() {
    return (
        <>
            <img className="bg-img" src="/images/bg-2.png" alt="Background Image" />
            <header>
                <h1>Mounts</h1>
                <p>
                    All mounts move at the same speed. Multiple mounts can unlock achievements, and maintaining mounts will reward you with dark crystals. Some mounts have different colors available at certain levels.
                </p>
            </header>
            
            <section>
                <h2>Mount List</h2>
                <ModalMenu type="mounts" listContent={MOUNTS} />
            </section>

        </>
    );
}

export default Mounts;