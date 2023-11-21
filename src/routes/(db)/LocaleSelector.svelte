<script>
    import { userLocale } from "$lib/stores";
    import { page } from "$app/stores"
    import { browser } from "$app/environment" 
    import { goto } from "$app/navigation"
    
    let locales = [
        {
            name: "English",
            code: "en",
        },
        {
            name: "Español",
            code: "es",
        },
        {
            name: "Português",
            code: "pt",
        },
        {
            name: "Français",
            code: "fr",
        },
        {
            name: "Deutsch",
            code: "de",
        },
        {
            name: "Indonesian",
            code: "id",
        },
        {
            name: "русский",
            code: "ru",
        },
        {
            name: "ไทย",
            code: "th",
        },
        {
            name: "中文",
            code: "zh-cn",
        },
        {
            name: "日本語",
            code: "ja",
        },
    ];

    $: if (browser) {
        $userLocale
        updateUrl();
    }
    
    function updateUrl() {
        $page.url.searchParams.set("lang", $userLocale)

        goto(`?${$page.url.searchParams.toString()}`, {
            noScroll: true,
            replaceState: false,
            keepFocus: true,
            invalidateAll: true,
        });
    }
</script>

<select bind:value={$userLocale} on:input={updateUrl}>
    {#each locales as locale}
        <option value={locale.code}>{locale.name}</option>
    {/each}
</select>