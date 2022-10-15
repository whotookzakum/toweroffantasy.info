import { ModalMenu } from "../../../components/Modal";
import { CHAT_BUBBLES } from "../../../data/en-US/cosmetics/cosmetics";
import { setPageTitle } from "../../../components/Layout";
import Head from 'next/head';
import Ads from "../../../components/Ads";
import BackButton from "../../../components/BackButton";

function ChatBubbles() {
    return (
        <>
            <Head>
                <title>{setPageTitle('Chat Bubbles')}</title>
                <meta name="description" content="List of all chat bubbles and how to obtain them in Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src="/static/images/bg-1.webp" alt="Background Image" />
            <BackButton/>
            <header>
                <h1>Chat Bubbles</h1>
                <p>
                    How to obtain chat bubbles that customize your text border in chat. Many of them are acquired through paid gachapon events or Collector's/Advanced passes.
                </p>
            </header>

            <Ads unit="lb1" />

            <section>
                <h2>Chat Bubble List</h2>
                <ModalMenu list={CHAT_BUBBLES} />
            </section>

            <Ads unit="lb3" />
            <Ads unit="mpu1" />
            <BackButton/>
        </>
    );
}

export default ChatBubbles;