<template>
  <v-app>
    <v-container fluid>
      <v-layout
        row 
        wrap
      >
        <v-flex xs5>
          <v-select-page
            ref="test"
            :ignore-case="false"
            :has-selected="hasSelected"
            :page="true"
            :multiple-limit="6"
            :pagelimit = "10"
            :data="list"
            actions
            language="en"
            label="Campaign"
            @on-change="onChange"
            @on-action="doQuery"
          />   
        </v-flex>
        <v-flex xs5>
          <v-select-page
            :pagelimit="10"
            :data="list"
            ignore-case
            language="en"
            search-text="Search"
            placeholder="Please select a campaign."
            label="Campaign"/>
        </v-flex>
        <v-flex xs5>
          <v-btn @click="clear">Clear</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: '6jAwgwj1FgI',
          level: 'campaign',
          name: 'taobao_Banner_adview_CLONE',
          path: [],
        },
        {
          id: 'uHsolrB6vgb',
          level: 'campaign',
          name: '日本永恒_banner_inneractive_JP_iOS_1',
          path: [],
        },
        {
          id: 'J9d2PDRUXh5',
          level: 'campaign',
          name: 'Visiting_JSTAG_smaato_JP_iOS',
          path: [],
        },
        {
          id: 'Qv2SDcWjJzU',
          level: 'campaign',
          name: 'ZY_BallShooter_小米_Android',
          path: [],
        },
        {
          id: 'k5iG6CDSlhs',
          level: 'campaign',
          name: 'taobao_Banner_adview',
          path: [],
        },
        {
          id: 'EGixbJPhCRW',
          level: 'campaign',
          name: 'taobao_CPC_Banner_inneractive',
          path: [],
        },
        {
          id: 'vRCzfxWGyz0',
          level: 'campaign',
          name: 'taobao_Banner_geniee',
          path: [],
        },
        {
          id: 'paSgyWLuw83',
          level: 'campaign',
          name: 'ZY_BallShooter_adivew_US_IOS',
          path: [],
        },
        {
          id: 'ybrazejKbUZ',
          level: 'campaign',
          name: 'Yahoo Mail_JSTAG_smatto_US_iOS',
          path: [],
        },
        {
          id: 'ZQqrsRoGyEg',
          level: 'campaign',
          name: '日本永恒_banner_inneractive_JP_iOS_CLONE',
          path: [],
        },
        {
          id: 'ocuDZlUKQTQ',
          level: 'campaign',
          name: '日本永恒_banner_inneractive_JP_iOS',
          path: [],
        },
        {
          id: 'dOsh4vvSlgO',
          level: 'campaign',
          name: 'Visiting_JSTAG_inneractive_JP_iOS',
          path: [],
        },
        {
          id: 'BBbtOKo9vlH',
          level: 'campaign',
          name: 'Shadowverse_JSTAG_inneractive_JP_iOS',
          path: [],
        },
        {
          id: 'YLsGuaUDJ39',
          level: 'campaign',
          name: 'KOF_JSTAG_inneractive_iOS_JP',
          path: [],
        },
        {
          id: 'UI92wu8qqdl',
          level: 'campaign',
          name: 'Traveloka_JSTAG_geniee_ID_Android',
          path: [],
        },
        {
          id: 'pTfhpDrDSyK',
          level: 'campaign',
          name: 'Wansuiye_JSTAG_inneractive_KR_Android',
          path: [],
        },
        {
          id: 'O6aoOxi6eOM',
          level: 'campaign',
          name: 'newmatgo_JSTAG_inneractive_KR_Android',
          path: [],
        },
        {
          id: 'MNzJlEbbzfQ',
          level: 'campaign',
          name: 'ZY_BallShooter_Banner_smartyads_US_IOS',
          path: [],
        },
        {
          id: 'q5M9XadRbzn',
          level: 'campaign',
          name: 'RPG_JSTAG_inneractive_JP_Android',
          path: [],
        },
        {
          id: 'H7bFdcwxMGX',
          level: 'campaign',
          name: 'Jackpot_JSTAG_cheetah_KR_Android',
          path: [],
        },
        {
          id: 'h2tvXsgjPdC',
          level: 'campaign',
          name: 'yahoo_JSTAG_inneractive_JP_iOS',
          path: [],
        },
        {
          id: '80U3587p1bY',
          level: 'campaign',
          name: 'Amazon_JSTAG_smartyads_JP_iOS',
          path: [],
        },
        {
          id: 'KlKzuGtFNzR',
          level: 'campaign',
          name: 'DraftKings_JSTAG_Mobfox_US_iOS',
          path: [],
        },
        {
          id: 'mOSa7Nj5075',
          level: 'campaign',
          name: 'Yahoo Mail_JSTAG_smartyads_US_iOS',
          path: [],
        },
        {
          id: 'YyjLOSubkBF',
          level: 'campaign',
          name: 'fuboTV_JSTAG_inneractive_US_iOS',
          path: [],
        },
        {
          id: '3Iza1fsLmXT',
          level: 'campaign',
          name: 'ROMWE_JSTAG_inneractive_US_iOS',
          path: [],
        },
        {
          id: 'tnxpvqtmRwv',
          level: 'campaign',
          name: 'test0913',
          path: [],
        },
        {
          id: 'kUYIo09taiA',
          level: 'campaign',
          name: 'poker_JSTAG_Cheetah_US_Android',
          path: [],
        },
        {
          id: 'NpKotNv0Vid',
          level: 'campaign',
          name: 'Amazon _JSTAG_Inneractive_US_Android',
          path: [],
        },
        {
          id: 'BmW3gedurKK',
          level: 'campaign',
          name: '新三國志_JSTAG_Mobfox_JP_iOS',
          path: [],
        },
        {
          id: 'bYh5dmOepJu',
          level: 'campaign',
          name: 'HBO_JSTAG_Inneractive_US_iOS',
          path: [],
        },
        {
          id: 'dclngh8pXkk',
          level: 'campaign',
          name: 'LINE_JSTAG_Inneractive_JP_iOS',
          path: [],
        },
        {
          id: 'BobNoqsVyQZ',
          level: 'campaign',
          name: 'Fan_JSTAG_Mobfox_US_iOS',
          path: [],
        },
        {
          id: 'A5aQDrpMFcb',
          level: 'campaign',
          name: 'Tapple_JSTAG_Inneractive_JP_iOS',
          path: [],
        },
        {
          id: 'pB8GBaeykwU',
          level: 'campaign',
          name: 'Tapple_Banner_Inneractive_JP_iOS',
          path: [],
        },
        {
          id: 'VyFp8g7Coai',
          level: 'campaign',
          name: 'Word _Banner_smatto__US_iOS',
          path: [],
        },
        {
          id: 'pIEdqzxbPUj',
          level: 'campaign',
          name: 'SL_Tinder_JSTAG_728_90_US_iOS_',
          path: [],
        },
        {
          id: '3x5w26fnvc8',
          level: 'campaign',
          name: 'SL_Pairs_JSTAG_Inneractive_iOS',
          path: [],
        },
        {
          id: 'Hy6HCodxak1',
          level: 'campaign',
          name: 'Spotify Music _JSTAG_Inneractive_JP_iOS',
          path: [],
        },
        {
          id: '7hgxujX2j3V',
          level: 'campaign',
          name: 'Word _JSTAG__Mobfox_US_iOS',
          path: [],
        },
        {
          id: 'IZmVndB3SD8',
          level: 'campaign',
          name: 'Food _JSTAG_Mobfox_US_iOS',
          path: [],
        },
        {
          id: 'FiUW85hWBp7',
          level: 'campaign',
          name: 'Amazon _JSTAG_Inneractive_US_iOS',
          path: [],
        },
        {
          id: 'bnbttQXzzNJ',
          level: 'campaign',
          name: 'poker_JSTAG_inneractive_KR_Android',
          path: [],
        },
        {
          id: 'GThw5yAEYwA',
          level: 'campaign',
          name: 'VMate_video_Cheetah_IN_Android',
          path: [],
        },
        {
          id: 'QpRBktqinho',
          level: 'campaign',
          name: '迪斯尼_JSTAG_Inneractive_JP_iOS',
          path: [],
        },
        {
          id: 'vBySE2o6UZg',
          level: 'campaign',
          name: 'SL_여기_Banner_Inneractive_Android',
          path: [],
        },
        {
          id: 'cxGI0Qu21P2',
          level: 'campaign',
          name: 'SL_Pairs_Banner_Inneractive_iOS',
          path: [],
        },
        {
          id: 'zevFkHCLh9C',
          level: 'campaign',
          name: 'Audible_JSTAG_Inneractive_US_iOS',
          path: [],
        },
        {
          id: '7QooOP2nN76',
          level: 'campaign',
          name: 'Triple_JSTAG_Inneractive_KR_Android',
          path: [],
        },
        {
          id: '4jnUS37pFgA',
          level: 'campaign',
          name: 'SL_Big Fish_JSTAG_Mobfox_iOS',
          path: [],
        },
        {
          id: '65MJvQFUioP',
          level: 'campaign',
          name: 'Lemonade_JSTAG_inneractive_US_iOS',
          path: [],
        },
        {
          id: 'gjAfkkz93hj',
          level: 'campaign',
          name: 'Amazon _Banner_Inneractive_US_Android',
          path: [],
        },
        {
          id: 'NeCl4WfFEAG',
          level: 'campaign',
          name: 'Ink Cards _Banner_Inneractive_US_iOS',
          path: [],
        },
        {
          id: 'fTMHMDLe7Qi',
          level: 'campaign',
          name: 'TIDAL _Banner_Inneractive_US_iOS',
          path: [],
        },
        {
          id: 'JUeQOkc8m9j',
          level: 'campaign',
          name: 'Lemonade_Banner_Inneractive_US_iOS',
          path: [],
        },
        {
          id: 'ZWU3TdrdsPR',
          level: 'campaign',
          name: 'ZY_BallShooter_Banner_smartyads_US_IOS',
          path: [],
        },
        {
          id: 'IgibcalJ7dD',
          level: 'campaign',
          name: '여기_JSTAG_cheetah_KR_Android',
          path: [],
        },
        {
          id: 'KcjlKP78How',
          level: 'campaign',
          name: '江湖大夢_JSTAG_Cheetah_MY_Android',
          path: [],
        },
        {
          id: 'EMdf1SubRqh',
          level: 'campaign',
          name: 'Legends_JSTAG_Cheetah_MY_Android',
          path: [],
        },
        {
          id: 'EioI3kJs2WX',
          level: 'campaign',
          name: 'Compras_JSTAG_Cheetah_BR_Android',
          path: [],
        },
        {
          id: 'bFQRrwTvpdh',
          level: 'campaign',
          name: 'AE_JSTAG_inneractive_Android-TEST',
          path: [],
        },
        {
          id: 'JSAST38eZmt',
          level: 'campaign',
          name: 'Girl_JSTAG_Cheetah_JP_Android',
          path: [],
        },
        {
          id: 'n2piJiLpfve',
          level: 'campaign',
          name: '迪斯尼_JSTAG_Mobfox_JP_iOS',
          path: [],
        },
        {
          id: 'iANKzAvg43P',
          level: 'campaign',
          name: 'Tinder_JSTAG_Inneractive_US_iOS',
          path: [],
        },
        {
          id: '4BgYxb4MWKV',
          level: 'campaign',
          name: 'Candy Crush_JSTAG_Mobfox_US_iOS',
          path: [],
        },
        {
          id: 'OiH63FSeqmb',
          level: 'campaign',
          name: 'ROBLOX_JSTAG_Inneractive_JP_iOS',
          path: [],
        },
        {
          id: 'JXmBPzxTxc7',
          level: 'campaign',
          name: 'Tik Tok_JSTAG_Inneractive_JP_iOS',
          path: [],
        },
        {
          id: 'A6c58BwLROf',
          level: 'campaign',
          name: 'Episode_JSTAG_inneractive_JP_iOS',
          path: [],
        },
        {
          id: 'YWkurPOP09F',
          level: 'campaign',
          name: 'Pairs_JSTAG_Mobfox_JP_iOS',
          path: [],
        },
        {
          id: 'HzmTroJBshG',
          level: 'campaign',
          name: '3_Grand_JSTAG_arteebee_US_Android',
          path: [],
        },
        {
          id: 'JTnyleJ4Nbc',
          level: 'campaign',
          name: '陰屍路_JSTAG_Cheetah_US',
          path: [],
        },
        {
          id: 'xmJ6GIj4irw',
          level: 'campaign',
          name: 'Baseball_JSTAG_Cheetah_US',
          path: [],
        },
        {
          id: 'RSwMpj4EeWt',
          level: 'campaign',
          name: '여기_JSTAG_Cheetah_KR',
          path: [],
        },
        {
          id: 'JJp4DrNsS39',
          level: 'campaign',
          name: 'poker_JSTAG_Cheetah_KR_Android',
          path: [],
        },
        {
          id: '3AU0d3H0npH',
          level: 'campaign',
          name: '2_BOSS_JSTAG_Mobfox_US_iOS',
          path: [],
        },
        {
          id: 'sqWn0Axs3gE',
          level: 'campaign',
          name: '2_Big Fish Casino_JSTAG_Mobfox_US_iOS',
          path: [],
        },
        {
          id: 'tij1irAXoDI',
          level: 'campaign',
          name: '2_Audible_JSTAG_Mobfox_US_iOS',
          path: [],
        },
        {
          id: 'zPN6nJ9ZeuE',
          level: 'campaign',
          name: 'LinkedIn_JSTAG_inneractive_US_iOS',
          path: [],
        },
        {
          id: '9U7j7xwUUJD',
          level: 'campaign',
          name: 'letgo_JSTAG_inneractive_US_iOS',
          path: [],
        },
        {
          id: 'hCpEVhUMafl',
          level: 'campaign',
          name: '2_白猫_JSTAG_Inneractive_JP_iOS',
          path: [],
        },
        {
          id: 'BrWxevucWjn',
          level: 'campaign',
          name: 'Triple_JSTAG_Cheetah_KR_Android',
          path: [],
        },
        {
          id: '323AczB92fl',
          level: 'campaign',
          name: 'Grand Summoners_JSTAG_Cheetah_US',
          path: [],
        },
      ],
      hasSelected: '',
    };
  },
  methods: {
    onChange(val) {
      this.hasSelected = val;
    },
    doQuery(val) {
      this.hasSelected = val;
    },
    clear() {
      this.$refs.test.clear();
    },
  },
};
</script>
