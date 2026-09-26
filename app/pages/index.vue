<template>
    <main>
        <ProfileHero />
        <ProfileResearchOverview />
        <ProfileEducationSection />
        <ProfileActivitiesSection />
        <ProfileAffiliationsSection />
        <ProfileExternalProfilesSection />
        <ProfileContactSection />
    </main>
</template>

<script setup lang="ts">
const siteUrl = "https://mayu2664.jp"
const pageTitle = "川島 雅結（KAWASHIMA Mayu）｜情報セキュリティ・情報法"
const pageDescription =
    "情報セキュリティを技術と法制度の両面から捉え、安全で信頼できる情報通信基盤について研究する川島雅結のプロフィールサイトです。"
const ogImage = `${siteUrl}/images/profile.png`

useSeoMeta({
    title: pageTitle,
    description: pageDescription,
    ogTitle: pageTitle,
    ogDescription: pageDescription,
    ogType: "website",
    ogUrl: siteUrl,
    ogSiteName: "mayu2664.jp",
    ogLocale: "ja_JP",
    ogImage,
    ogImageAlt: "川島雅結のプロフィール画像",
    ogImageType: "image/png",
    ogImageWidth: 1086,
    ogImageHeight: 1085,
    twitterCard: "summary",
    twitterTitle: pageTitle,
    twitterDescription: pageDescription,
    twitterImage: ogImage,
    twitterImageAlt: "川島雅結のプロフィール画像",
})

useHead({
    link: [{ rel: "canonical", href: siteUrl }],
})
</script>
