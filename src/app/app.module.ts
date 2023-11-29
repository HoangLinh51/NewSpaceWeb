import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './home/hero/hero.component';
import { NewestComponent } from './home/newest/newest.component';
import { TrendingNewComponent } from './home/trending-new/trending-new.component';
import { PostNewsComponent } from './home/post-news/post-news.component';
import { ViralVideosComponent } from './home/viral-videos/viral-videos.component';
import { ConditionPlanetComponent } from './home/condition-planet/condition-planet.component';
import { OurPodcastsComponent } from './home/our-podcasts/our-podcasts.component';
import { WorldNewsComponent } from './home/world-news/world-news.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NewestComponent,
    TrendingNewComponent,
    PostNewsComponent,
    ViralVideosComponent,
    ConditionPlanetComponent,
    OurPodcastsComponent,
    WorldNewsComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
