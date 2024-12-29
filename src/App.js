import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.App}>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.logo_cont}>
            <img className={styles.logo_img} src="./images/logo.png"></img>
            <p className={styles.logo_p}>Catnut</p>
          </div>
          <div className={styles.header_nav}>
            <a className={styles.nav_link}>Home</a>
            <a className={styles.nav_link}>About</a>
            <a className={styles.nav_link}>How to buy</a>
            <a className={styles.nav_link}>Bridge</a>
            <a className={styles.nav_link}>Tokenomics</a>
            <a className={styles.nav_link}>Roadmap</a>
          </div>
          <div className={styles.header_nav_mobile}>
            <div className={styles.header_nav_1}>
              <a className={styles.nav_link}>Home</a>
              <a className={styles.nav_link}>About</a>
              <a className={styles.nav_link}>How to buy</a>
            </div>
            <div className={styles.header_nav_1}>
              <a className={styles.nav_link}>Bridge</a>
              <a className={styles.nav_link}>Tokenomics</a>
              <a className={styles.nav_link}>Roadmap</a>
            </div>
          </div>
          <button className={styles.header_btn}>Buy now</button>
        </div>
        <div className={styles.main_cnt}>
          <div className={styles.left_side}>
            <h1 className={styles.m_l_h1}>Catnut</h1>
            <p className={styles.m_l_p}>
              The most memeable memecoin in existencwe. The dogs have had their
              day, it’s time for Catnut to take reign
            </p>
            <div className={styles.m_l_cnt}>
              <div className={styles.m_l_cnt_links}>
                <div className={styles.m_l_cnt_links_cnt}>
                  <img
                    className={styles.m_l_cnt_links_link}
                    src="./images/link_1.png"
                  ></img>
                  <img
                    className={styles.m_l_cnt_links_link}
                    src="./images/link_2.png"
                  ></img>
                </div>
                <div className={styles.m_l_cnt_links_cnt}>
                  <img
                    className={styles.m_l_cnt_links_link}
                    src="./images/link_3.png"
                  ></img>
                  <img
                    className={styles.m_l_cnt_links_link}
                    src="./images/link_4.png"
                  ></img>
                </div>
              </div>
              <div className={styles.m_l_cnt_right}>
                <div className={styles.m_l_cnt_right_links}>
                  <div className={styles.m_l_cnt_right_link}>
                    <img
                      className={styles.m_l_cnt_r_img}
                      src="./images/link_r_1.png"
                    ></img>
                    <p className={styles.m_l_cnt_r_p}>coinbase</p>
                  </div>
                  <p className={styles.m_l_cnt_right_link_p}>SOON</p>
                </div>
                <div className={styles.m_l_cnt_right_links}>
                  <div className={styles.m_l_cnt_right_link}>
                    <img
                      className={styles.m_l_cnt_r_img}
                      src="./images/link_r_2.png"
                    ></img>
                    <p className={styles.m_l_cnt_r_p}>binance</p>
                  </div>
                  <p className={styles.m_l_cnt_right_link_p}>SOON</p>
                </div>
                <div className={styles.m_l_cnt_right_links}>
                  <div className={styles.m_l_cnt_right_link}>
                    <img
                      className={styles.m_l_cnt_r_img}
                      src="./images/link_r_3.png"
                    ></img>
                    <p className={styles.m_l_cnt_r_p}>Uniswap</p>
                  </div>
                  <p className={styles.m_l_cnt_right_link_p}>SOON</p>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.right_side_img}
            src="./images/main_img.png"
          ></img>
        </div>
        <div className={styles.about_cnt}>
          <img
            className={styles.a_left_side}
            src="./images/about_cat.png"
          ></img>
          <div className={styles.about_right}>
            <h1 className={styles.about_h1}>About</h1>
            <p className={styles.about_p1}>
              Welcome to the world of Catnut A token that revives the magic of
              memes and lays the foundation for a unique ecosystem that connects
              tokens and ideas.
            </p>
            <p className={styles.about_p2}>
              Catnut is the first nut on the Meme Tree, giving life to an entire
              series of interconnected tokens. Each new token appearing on our
              tree will be closely tied to the ecosystem and add its own unique
              value. Together, they will create a solid foundation for the
              project's long-term growth and development.
            </p>
            <p className={styles.about_p3}>
              We believe that great things don't happen overnight. Our project
              is set on a long journey, filled with challenges, ideas, and
              victories. Catnut and the Meme Tree are more than just memes—they
              are a story of creativity, community, and the power of innovation.
            </p>
            <img
              className={styles.about_tri}
              src="./images/about_tri.png"
            ></img>
          </div>
        </div>
        <div className={styles.goals}>
          <div className={styles.goals_cnt}>
            <h1 className={styles.goals_h1}>Our goals:</h1>
            <div className={styles.goal_title}>
              <img
                className={styles.goal_img}
                src="./images/group_dot.png"
              ></img>
              <p className={styles.goal_p}>
                An interconnected token ecosystem: Every new "nut" strengthens
                the tree and creates synergy with existing projects.
              </p>
            </div>
            <div className={styles.goal_title}>
              <img
                className={styles.goal_img}
                src="./images/group_dot.png"
              ></img>
              <p className={styles.goal_p}>
                Long-term development: We're building not just meme tokens, but
                a community ready to overcome challenges and move forward.
              </p>
            </div>
            <div className={styles.goal_title}>
              <img
                className={styles.goal_img}
                src="./images/group_dot.png"
              ></img>
              <p className={styles.goal_p}>
                Catnut's mission: To unite the world of memes and crypto by
                creating unique projects that will be remembered for years to
                come.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.tree}>
          <div className={styles.tree_cnt}>
            <img className={styles.tree_img} src="./images/tree.png"></img>
            <div className={styles.tree_absolute_text}>
              <p className={styles.tree_absolute_p1}>HOW to</p>
              <p className={styles.tree_absolute_p2}>buy</p>
            </div>
            <div className={styles.tree_cards}>
              <div className={styles.tree_card_1}>
                <img
                  className={styles.tree_card_img_1}
                  src=".\images\tree_img_1.png"
                ></img>
                <div className={styles.tree_card_title}>
                  <h1 className={styles.tree_card_h1}>Create a wallet</h1>
                  <p className={styles.tree_card_p}>
                    Download metamask or your wallet of choice from the app
                    store or google play store for free. Desktop users, download
                    the google chrome extension by going to metamask.io.
                  </p>
                </div>
              </div>
              <div className={styles.tree_card_2}>
                <img
                  className={styles.tree_card_img_2}
                  src=".\images\tree_img_2.png"
                ></img>
                <div className={styles.tree_card_title}>
                  <h1 className={styles.tree_card_h1}>Get some SOL</h1>
                  <p className={styles.tree_card_p}>
                    Have SOL in your wallet to switch to $CATNUT. If you don’t
                    have any SOL, you can buy directly on metamask, transfer
                    from another wallet, or buy on another exchange and send it
                    to your wallet.
                  </p>
                </div>
              </div>
              <div className={styles.tree_card_3}>
                <img
                  className={styles.tree_card_img_3}
                  src=".\images\tree_img_3.png"
                ></img>
                <div className={styles.tree_card_title}>
                  <h1 className={styles.tree_card_h1}>Go to raydium</h1>
                  <p className={styles.tree_card_p}>
                    Connect to Raydium to trade and add liquidity for Catnut.
                    Seamlessly interact with our ecosystem and join the meme
                    revolution!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img className={styles.tree_tri} src="./images/tri_2.png"></img>
        </div>
        <div className={styles.token}>
          <h1 className={styles.token_h1}>Tokenomics</h1>
          <p className={styles.token_p_1}>1 000 000 000</p>
          <p className={styles.token_p_2}>token supply</p>
          <div className={styles.token_card_1}>
            <div className={styles.token_title}>
              <p className={styles.token_title_p_1}>
                An Interconnected Meme Ecosystem
              </p>
              <p className={styles.token_title_p_2}>
                Catnut is more than just a token—it’s the beginning of a network
                of interconnected meme tokens. Each new token in our ecosystem
                will be linked to others, creating a unique and sustainable
                structure that builds trust and drives growth.
              </p>
            </div>
            <img
              className={styles.token_img_1}
              src="./images/token_1.png"
            ></img>
          </div>
          <div className={styles.token_card_2}>
            <img
              className={styles.token_img_1}
              src="./images/token_2.png"
            ></img>
            <div className={styles.token_title_2}>
              <p className={styles.token_title_p_1}>Transparency and Trust</p>
              <p className={styles.token_title_p_2}>
                We are committed to absolute transparency. All information about
                tokens, their distribution, and progress will be open to the
                community. Every token in this ecosystem is a project you can
                trust.
              </p>
            </div>
          </div>
          <div className={styles.token_card_3}>
            <div className={styles.token_title}>
              <p className={styles.token_title_p_1}>Long-Term Goals</p>
              <p className={styles.token_title_p_2}>
                Our mission is to build a powerful and lasting meme ecosystem
                that’s not just a trend, but a meaningful part of the crypto
                world for years to come. By investing in Catnut and other tokens
                in our network, you’re becoming part of this long-term vision.
              </p>
            </div>
            <img
              className={styles.token_img_1}
              src="./images/token_3.png"
            ></img>
          </div>
          <div className={styles.token_card_4}>
            <img
              className={styles.token_img_1}
              src="./images/token_4.png"
            ></img>
            <div className={styles.token_title_4}>
              <p className={styles.token_title_p_1}>Why It Matters</p>
              <p className={styles.token_title_p_2}>
                An interconnected network of tokens and a transparent ecosystem
                provide confidence that every project within the network
                supports one another, making them a reliable choice for the
                community and investors alike.
              </p>
            </div>
          </div>
          <img className={styles.token_tri} src="./images/about_tri.png"></img>
        </div>
        <div className={styles.roadmap}>
          <h1 className={styles.road_h1}>Roadmap</h1>
          <div className={styles.road_card}>
            <img className={styles.road_img} src="./images/road_1.png"></img>
            <div className={styles.road_title}>
              <p className={styles.road_title_p_1}>Phase 1: Plant the Seed</p>
              <p className={styles.road_title_p_2}>
                Launch the Catnut token on the Pump.fun platform. Develop
                initial content: memes, GIFs, and animations. Build and grow the
                community on Twitter, Telegram, and Discord. Conduct an initial
                token airdrop to attract early participants.
              </p>
            </div>
          </div>
          <div className={styles.road_cnt_2}>
            <div className={styles.road_card}>
              <img className={styles.road_img} src="./images/road_2.png"></img>
              <div className={styles.road_title}>
                <p className={styles.road_title_p_1}>Phase 2: Grow the Tree</p>
                <p className={styles.road_title_p_2}>
                  Expand the ecosystem by launching the first interconnected
                  tokens. Forge partnerships with other meme projects. List the
                  token on major platforms like CoinMarketCap and CoinGecko.
                  Collaborate with crypto influencers to drive awareness.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.road_cnt_3}>
            <div className={styles.road_card}>
              <img className={styles.road_img} src="./images/road_3.png"></img>
              <div className={styles.road_title}>
                <p className={styles.road_title_p_1}>
                  Phase 3: Harvest the Fruits
                </p>
                <p className={styles.road_title_p_2}>
                  Integrate the token into games and applications. Develop
                  unique content tied to Catnut and its connected tokens. Scale
                  up with listings on centralized exchanges (CEX). Build a
                  full-fledged Meme Tree ecosystem, connecting tokens and the
                  community.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footer_cnt}>
            <div className={styles.footer_logo}>
              <img
                className={styles.footer_logo_1}
                src="./images/footer_1.png"
              ></img>
              <img
                className={styles.footer_logo_2}
                src="./images/footer_2.png"
              ></img>
              <p className={styles.footer_logo_p}>Catnut</p>
            </div>
            <p className={styles.header_title}>
              $CATNUT is a meme token created purely for entertainment purposes.
              <br></br>
              It has no intrinsic value or financial guarantees. There is no
              formal team or promised roadmap—just fun, community, and
              creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}