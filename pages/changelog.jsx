import { CHANGELOG } from "../data/en-US/changelog";

const changelogContent = CHANGELOG.map(update => <tr><th>{update.date}</th><td>{update.text}</td></tr>);

export default function Changelog() {
    return (
        <>
            <h1>Changelog</h1>
            <table className="changelog w-75ch">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Changes</th>
                    </tr>
                </thead>
                <tbody>{changelogContent}</tbody>
            </table>
        </>
    )
}