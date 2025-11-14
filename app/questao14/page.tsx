"use client";
import styles from "./styles/PageWrap.module.css";
import ForumHeader from "./components/ForumHeader";
import TopicDetails from "./components/TopicHero";
import ResponseList from "./components/RepliesList";
import ReplyComposer from "./components/ReplyComposer";
import Sidebar from "./components/ForumAside";
import SideRailDrawer from "./components/SideRailDrawer";
import {
  mainTopic,
  topicResponses,
  sidebarData,
  menuItems,
  currentUser,
} from "./data/forumData";

export default function Page() {
  return (
    <div className={styles.container}>
      <ForumHeader menu={menuItems} />

      <SideRailDrawer
        latest={sidebarData.latest}
        mostReplied={sidebarData.mostReplied}
        mostLiked={sidebarData.mostLiked}
      />

      <main className={styles.main} role="main" aria-label="Discussão do fórum">
        <div className={styles.content}>
          <TopicDetails topic={mainTopic} />
          <ResponseList responses={topicResponses} />
          <ReplyComposer currentUser={currentUser} />
        </div>

        <aside className={styles.sideRail} aria-label="Atividades da comunidade">
          <Sidebar
            latest={sidebarData.latest}
            mostReplied={sidebarData.mostReplied}
            mostLiked={sidebarData.mostLiked}
          />
        </aside>
      </main>
    </div>
  );
}
