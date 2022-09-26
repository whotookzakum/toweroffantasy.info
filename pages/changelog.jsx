import { CHANGELOG } from "../data/en-US/changelog";
import Head from "next/head";
import { setPageTitle } from "../components/Layout";
import Ads from "../components/Ads";

const changelogContent = CHANGELOG.map(update => <tr key={update.date}><th>{update.date}</th><td>{update.text}</td></tr>);

export default function Changelog() {
    return (
        <>
            <Head>
                <title>{setPageTitle('Changelog')}</title>
                <meta name="description" content="List of updates and changes to the Tower of Fantasy Index website." />
            </Head>
            <h1>Changelog</h1>

            <Ads unit="lb3" />
            <Ads unit="mpu1" />

            <table className="changelog w-75ch">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Changes</th>
                    </tr>
                </thead>
                <tbody>{changelogContent}</tbody>
            </table>

            <Ads unit="mpu2" />
        </>
    )
}