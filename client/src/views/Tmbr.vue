<template>
  <div class="tmbr">
    <Container
      :contents="contents"
      :direction="direction"
      :mes="mes"
      :current.sync="current"
    />
    <Bar
      :direction="direction"
      :max="max"
      :current.sync="current"
      :scrollTo="scrollTo"
    />
    <Indicator
      :current="current"
      :max="max"
      :changeDirection="changeDirection"
    />
    <Notifications :notifications="notifications" />
    <Toolbox
      :showAction.sync="showAction"
      :pin="pin"
      :like="like"
      :rblg="rblg"
    />
    <ActionOverlay :showAction.sync="showAction" :goto="scrollTo" />
  </div>
</template>

<script>
/* eslint-disable no-console */
import Container from "@/components/Container.vue";
import Bar from "@/components/Bar.vue";
import Indicator from "@/components/Indicator.vue";
import Notifications from "@/components/Notifications.vue";
import Toolbox from "@/components/Toolbox.vue";
import ActionOverlay from "@/components/ActionOverlay.vue";

import { fetchFeeds } from "@/lib/fetch/rss.js";
import { fetchFeeds as fetchPipe } from "@/lib/fetch/pipedream.js";

export default {
  name: "tmbr",
  components: {
    Container,
    Bar,
    Indicator,
    Notifications,
    Toolbox,
    ActionOverlay
  },
  data() {
    return {
      showAction: false,
      current: 1,
      direction: 1,
      mes: [],
      contents: [
        { text: "text contents" },
        { text: "second text contents" },
        {
          feedTextType: "twitter",
          created_at: "Fri Jan 14 03:03:34 +0000 2022",
          id: 1481824283320254500,
          id_str: "1481824283320254474",
          text:
            "コスパの良いダンボールとか紙で思いついたものを勢いで作るのが好きなんです。\n#フォロワー10000以下の一次創作作家発掘フェス https://t.co/gEsM282wXo",
          truncated: false,
          entities: {
            hashtags: [
              {
                text: "フォロワー10000以下の一次創作作家発掘フェス",
                indices: [38, 63]
              }
            ],
            symbols: [],
            user_mentions: [],
            urls: [],
            media: [
              {
                id: 1481824276861046800,
                id_str: "1481824276861046785",
                indices: [64, 87],
                media_url: "http://pbs.twimg.com/media/FJB_VCnaUAESzN5.jpg",
                media_url_https:
                  "https://pbs.twimg.com/media/FJB_VCnaUAESzN5.jpg",
                url: "https://t.co/gEsM282wXo",
                display_url: "pic.twitter.com/gEsM282wXo",
                expanded_url:
                  "https://twitter.com/tomowo_PS2/status/1481824283320254474/photo/1",
                type: "photo",
                sizes: {
                  small: { w: 516, h: 450, resize: "fit" },
                  thumb: { w: 150, h: 150, resize: "crop" },
                  medium: { w: 516, h: 450, resize: "fit" },
                  large: { w: 516, h: 450, resize: "fit" }
                }
              }
            ]
          },
          extended_entities: {
            media: [
              {
                id: 1481824276861046800,
                id_str: "1481824276861046785",
                indices: [64, 87],
                media_url: "http://pbs.twimg.com/media/FJB_VCnaUAESzN5.jpg",
                media_url_https:
                  "https://pbs.twimg.com/media/FJB_VCnaUAESzN5.jpg",
                url: "https://t.co/gEsM282wXo",
                display_url: "pic.twitter.com/gEsM282wXo",
                expanded_url:
                  "https://twitter.com/tomowo_PS2/status/1481824283320254474/photo/1",
                type: "photo",
                sizes: {
                  small: { w: 516, h: 450, resize: "fit" },
                  thumb: { w: 150, h: 150, resize: "crop" },
                  medium: { w: 516, h: 450, resize: "fit" },
                  large: { w: 516, h: 450, resize: "fit" }
                }
              },
              {
                id: 1481824276865241000,
                id_str: "1481824276865241094",
                indices: [64, 87],
                media_url: "http://pbs.twimg.com/media/FJB_VCoaUAYwdD1.jpg",
                media_url_https:
                  "https://pbs.twimg.com/media/FJB_VCoaUAYwdD1.jpg",
                url: "https://t.co/gEsM282wXo",
                display_url: "pic.twitter.com/gEsM282wXo",
                expanded_url:
                  "https://twitter.com/tomowo_PS2/status/1481824283320254474/photo/1",
                type: "photo",
                sizes: {
                  thumb: { w: 150, h: 150, resize: "crop" },
                  medium: { w: 496, h: 344, resize: "fit" },
                  large: { w: 496, h: 344, resize: "fit" },
                  small: { w: 496, h: 344, resize: "fit" }
                }
              },
              {
                id: 1481824276877836300,
                id_str: "1481824276877836292",
                indices: [64, 87],
                media_url: "http://pbs.twimg.com/media/FJB_VCragAQAcgt.jpg",
                media_url_https:
                  "https://pbs.twimg.com/media/FJB_VCragAQAcgt.jpg",
                url: "https://t.co/gEsM282wXo",
                display_url: "pic.twitter.com/gEsM282wXo",
                expanded_url:
                  "https://twitter.com/tomowo_PS2/status/1481824283320254474/photo/1",
                type: "photo",
                sizes: {
                  thumb: { w: 150, h: 150, resize: "crop" },
                  medium: { w: 506, h: 304, resize: "fit" },
                  small: { w: 506, h: 304, resize: "fit" },
                  large: { w: 506, h: 304, resize: "fit" }
                }
              },
              {
                id: 1481824276894609400,
                id_str: "1481824276894609408",
                indices: [64, 87],
                media_url: "http://pbs.twimg.com/media/FJB_VCvacAAVgA5.jpg",
                media_url_https:
                  "https://pbs.twimg.com/media/FJB_VCvacAAVgA5.jpg",
                url: "https://t.co/gEsM282wXo",
                display_url: "pic.twitter.com/gEsM282wXo",
                expanded_url:
                  "https://twitter.com/tomowo_PS2/status/1481824283320254474/photo/1",
                type: "photo",
                sizes: {
                  large: { w: 752, h: 450, resize: "fit" },
                  thumb: { w: 150, h: 150, resize: "crop" },
                  small: { w: 680, h: 407, resize: "fit" },
                  medium: { w: 752, h: 450, resize: "fit" }
                }
              }
            ]
          },
          source:
            '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 71569081,
            id_str: "71569081",
            name: "トモヲ",
            screen_name: "tomowo_PS2",
            location: "仙台",
            description:
              "デジタルを使ってのアナログ作業や、ペーパークラフトの設計とか好きです。\r\nダンボールクラフトがマイブーム中。",
            url: "https://t.co/W9Xr5NmeHP",
            entities: {
              url: {
                urls: [
                  {
                    url: "https://t.co/W9Xr5NmeHP",
                    expanded_url: "https://note.com/tomowo",
                    display_url: "note.com/tomowo",
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 11336,
            friends_count: 416,
            listed_count: 103,
            created_at: "Fri Sep 04 16:03:55 +0000 2009",
            favourites_count: 8266,
            utc_offset: null,
            time_zone: null,
            geo_enabled: false,
            verified: false,
            statuses_count: 3372,
            lang: null,
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: "131516",
            profile_background_image_url:
              "http://abs.twimg.com/images/themes/theme14/bg.gif",
            profile_background_image_url_https:
              "https://abs.twimg.com/images/themes/theme14/bg.gif",
            profile_background_tile: false,
            profile_image_url:
              "http://pbs.twimg.com/profile_images/1369122512768962564/XG8FNWpA_normal.jpg",
            profile_image_url_https:
              "https://pbs.twimg.com/profile_images/1369122512768962564/XG8FNWpA_normal.jpg",
            profile_banner_url:
              "https://pbs.twimg.com/profile_banners/71569081/1590325713",
            profile_link_color: "009999",
            profile_sidebar_border_color: "EEEEEE",
            profile_sidebar_fill_color: "EFEFEF",
            profile_text_color: "333333",
            profile_use_background_image: true,
            has_extended_profile: false,
            default_profile: false,
            default_profile_image: false,
            following: false,
            follow_request_sent: false,
            notifications: false,
            translator_type: "none",
            withheld_in_countries: []
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 4242,
          favorite_count: 22551,
          favorited: true,
          retweeted: false,
          possibly_sensitive: false,
          possibly_sensitive_appealable: false,
          lang: "ja"
        },
        {
          feedTextType: "twitter",
          created_at: "Sun Jan 16 00:43:33 +0000 2022",
          id: 1482513820517945300,
          id_str: "1482513820517945345",
          text:
            "昨日の都知事杯オープンデータハッカソン、本当にいろいろな作品が出ていて楽しかったのだけど、個人的にすごいと思ったのはOwnTwin。特定の地域のデジタルツインを切り出してデータを重ねていく、というアプローチが良い。また、ドキュメン… https://t.co/el6kznRbfP",
          truncated: true,
          entities: {
            hashtags: [],
            symbols: [],
            user_mentions: [],
            urls: [
              {
                url: "https://t.co/el6kznRbfP",
                expanded_url:
                  "https://twitter.com/i/web/status/1482513820517945345",
                display_url: "twitter.com/i/web/status/1…",
                indices: [117, 140]
              }
            ]
          },
          source:
            '<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>',
          in_reply_to_status_id: null,
          in_reply_to_status_id_str: null,
          in_reply_to_user_id: null,
          in_reply_to_user_id_str: null,
          in_reply_to_screen_name: null,
          user: {
            id: 5373182,
            id_str: "5373182",
            name: "Hal Seki",
            screen_name: "hal_sk",
            location: "東京 渋谷区",
            description:
              "sudo apt upgrade our-society; Georepublic/Code for Japan/HackCamp/Digital Agency",
            url: "https://t.co/ULOBFjYklt",
            entities: {
              url: {
                urls: [
                  {
                    url: "https://t.co/ULOBFjYklt",
                    expanded_url: "http://linkedin.com/in/halsk",
                    display_url: "linkedin.com/in/halsk",
                    indices: [0, 23]
                  }
                ]
              },
              description: { urls: [] }
            },
            protected: false,
            followers_count: 7056,
            friends_count: 2942,
            listed_count: 228,
            created_at: "Sat Apr 21 05:32:56 +0000 2007",
            favourites_count: 5370,
            utc_offset: null,
            time_zone: null,
            geo_enabled: true,
            verified: false,
            statuses_count: 12287,
            lang: null,
            contributors_enabled: false,
            is_translator: false,
            is_translation_enabled: false,
            profile_background_color: "131516",
            profile_background_image_url:
              "http://abs.twimg.com/images/themes/theme14/bg.gif",
            profile_background_image_url_https:
              "https://abs.twimg.com/images/themes/theme14/bg.gif",
            profile_background_tile: true,
            profile_image_url:
              "http://pbs.twimg.com/profile_images/1417298617132486657/4AL2yixW_normal.jpg",
            profile_image_url_https:
              "https://pbs.twimg.com/profile_images/1417298617132486657/4AL2yixW_normal.jpg",
            profile_banner_url:
              "https://pbs.twimg.com/profile_banners/5373182/1626745298",
            profile_link_color: "009999",
            profile_sidebar_border_color: "EEEEEE",
            profile_sidebar_fill_color: "EFEFEF",
            profile_text_color: "333333",
            profile_use_background_image: true,
            has_extended_profile: true,
            default_profile: false,
            default_profile_image: false,
            following: true,
            follow_request_sent: false,
            notifications: false,
            translator_type: "none",
            withheld_in_countries: []
          },
          geo: null,
          coordinates: null,
          place: null,
          contributors: null,
          is_quote_status: false,
          retweet_count: 10,
          favorite_count: 20,
          favorited: false,
          retweeted: false,
          possibly_sensitive: false,
          possibly_sensitive_appealable: false,
          lang: "ja"
        }
      ],
      notifications: [],
      feeds: [
        { id: 1, url: "https://dev.to/feed/" },
        { id: 2, url: "https://blog.miguelcoba.com/rss.xml" }
      ]
    };
  },
  computed: {
    max() {
      return this.contents.length;
    },
    whichHand() {
      return this.direction > 0 ? "right" : "left";
    }
  },
  mounted() {
    this.notifications.push("dsbd loaded");
    this.notifications.push("cached 100MB");
    this.fetchRss();
    this.fetchPipe();
  },
  methods: {
    fetchRss() {
      const feeds = fetchFeeds(this.feeds);
      console.log("feeds", feeds);
      feeds.map(feed =>
        feed.then(items => {
          items.map(item => this.contents.push(item));
        })
      );
      this.notifications.push("RSS loaded");
    },
    fetchPipe() {
      const feeds = fetchPipe([
        { id: 1, url: "https://en3purj35bw5ewy.m.pipedream.net" },
        // tumblr
        { id: 2, url: "https://enb00j2ayeiyi2y.m.pipedream.net" },
        // twitter
        { id: 3, url: "https://enuxci1t0c9lt91.m.pipedream.net" },
        // mongo items ( = mail anchor)
        { url: "https://enhkzss5i7monzf.m.pipedream.net" }
      ]);
      console.log("pipe", feeds);
      feeds.map(feed =>
        feed.then(items => {
          items.map(item => this.contents.push(item));
        })
      );
      window.items2 = this.contents;
      this.notifications.push("Pipe loaded");
    },
    pin() {
      this.contents.push(new Date());
      this.notifications.push("pinned");
    },
    like() {
      this.notifications.push("liked");
    },
    rblg() {
      this.notifications.push("rblged");
    },
    changeDirection() {
      this.direction *= -1;
      // console.log("direction to", this.direction);
      this.mes.push(this.whichHand + " hand");
      this.$nextTick(() => {
        this.scrollTo("pg" + this.current);
      });
      this.notifications.push(this.whichHand + " handed");
    },
    scrollTo(id) {
      const item = document.getElementById(id);
      item && item.scrollIntoView();
    }
  }
};
</script>

<style>
a {
  color: dodgerblue;
}
a:visited {
  color: cornflowerblue;
}
</style>
