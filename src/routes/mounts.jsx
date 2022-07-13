import { ModalMenu } from "components/Modal/Modal";
import { MOUNTS } from "data/en-US/mounts/mountList";


function Mounts() {
    return (
        <>
            <img className="bg-img" src="/images/bg-2.png" role="presentation" alt="" />
            <header>
                <h1>Mounts</h1>
                <p>
                    All mounts move at the same speed. Multiple mounts can unlock achievements, and maintaining mounts will reward you with dark crystals. Some mounts have different colors available at certain levels.
                </p>
            </header>
            
            <section>
                <h2>Mount List</h2>
                <ModalMenu list={MOUNTS} />
            </section>

        </>
    );
}

export default Mounts;