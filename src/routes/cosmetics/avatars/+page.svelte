<script>
    import SvelteMarkdown from "svelte-markdown";
    import avatars from "$lib/data/cosmetics/avatars.json";

    // [
    //     {
    //         name: "Fenrir",
    //         imgSrc: "touxiang_fenlier",
    //         source: "<abbr title='China Exclusive'></abbr> Unlocked by raising Fenrir's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Umi",
    //         imgSrc: "touxiang_wumi",
    //         source: "<abbr title='China Exclusive'></abbr> Unlocked by raising Umi's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Alyss",
    //         imgSrc: "touxiang_ailisi",
    //         source: "<abbr title='China Exclusive'></abbr> Unlocked by raising Alyss's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Annabella",
    //         imgSrc: "touxiang_annabeila",
    //         source: "<abbr title='China Exclusive'></abbr> Unlocked by raising Annabella's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Tian Lang",
    //         imgSrc: "touxiang_tianlang",
    //         source: "<abbr title='China Exclusive'></abbr> Unlocked by raising Tian Lang's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Lyra",
    //         imgSrc: "touxiang_xinghuan",
    //         source: "<abbr title='China Exclusive'></abbr> Unlocked by raising Lyra's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Lin",
    //         imgSrc: "touxiang_linye",
    //         source: "Unlocked by raising Lin's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Saki Fuwa",
    //         imgSrc: "touxiang_bupoxiao",
    //         source: "Unlocked by raising Saki Fuwa's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Ruby",
    //         imgSrc: "touxiang_leibei",
    //         source: "Unlocked by raising Ruby's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Angel Frigg",
    //         imgSrc: "Avatar12",
    //         source: "Unlocked by raising Frigg's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Nemesis",
    //         imgSrc: "avatar_naimeixisi",
    //         source: "Unlocked by raising Nemesis's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Marc",
    //         imgSrc: "touxiang_make",
    //         source: "<abbr title='China Exclusive'></abbr> Unlocked by raising Marc's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Baiyuekui",
    //         imgSrc: "touxiang_baiyuekui",
    //         source: "<abbr title='China Exclusive'></abbr> Unlocked by raising Baiyuekui's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Cobalt-b",
    //         imgSrc: "touxiang_gulan",
    //         source: "Unlocked by raising Cobalt-B's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Claudia",
    //         imgSrc: "touxiang_kelaodiya",
    //         source: "Unlocked by raising Claudia's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Coco Ritter",
    //         imgSrc: "touxiang_kekelite",
    //         source: "Unlocked by raising Coco Ritter's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Huma",
    //         imgSrc: "touxiang_xiuma",
    //         source: "Unlocked by raising Huma's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Crow",
    //         imgSrc: "touxiang_wuwan",
    //         source: "Unlocked by raising Crow's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "KING",
    //         imgSrc: "touxiang_king",
    //         source: "Unlocked by raising KING's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Meryl",
    //         imgSrc: "touxiang_meilier",
    //         source: "Unlocked by raising Meryl's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Samir",
    //         imgSrc: "touxiang_saimier",
    //         source: "Unlocked by raising Samir's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Shiro",
    //         imgSrc: "touxiang_xiluo",
    //         source: "Unlocked by raising Shiro's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Tsubasa",
    //         imgSrc: "touxiang_sifengyuanyu",
    //         source: "Unlocked by raising Tsubasa's Awakening points (friendship) to 200.",
    //     },
    //     {
    //         name: "Zero",
    //         imgSrc: "touxiang_ling",
    //         source: "Unlocked by raising Zero's Awakening points (friendship) to 200.",
    //     },
    // ]
</script>

<h1>Avatars</h1>
<p>Avatars shown on the <a href="/simulacra">Simulacra</a> page can be obtained by raising the respective simulacrum's Awakening points (friendship) to 200.</p>
<figure>
    <table>
        <thead>
            <th>Item</th>
            <th>Source</th>
        </thead>
        <tbody>
            {#each avatars as avatar}
                <tr>
                    <td class="img-and-name">
                        <img
                            src={`/images/Icon/Avatar/${avatar.imgSrc}.png`}
                            alt={avatar.name}
                            width="128"
                            height="128"
                        />
                        <h2>{avatar.name}</h2>
                    </td>
                    <td>
                        <SvelteMarkdown source={avatar.source} />
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</figure>
