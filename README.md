# Actual course page is at [https://TiraLabra.github.io/loppukesa_2020/](https://TiraLabra.github.io/loppukesa_2020/)

When setting up a new course the idea is that it's enough to fork/copy this repo and update the relevant info in `_config.yml` and `assets/fuu.js`, and publish github pages.

In `_config.yml` at least the following need to be changed:
* tile/entitle
* description/endescription
* url

In `assets/fuu.js`:
* Add course timing related event to the timing object.
    * The "dl#", "demo" and "end" events are used for filling in timing details on multiple pages
    * The rest of the events will only be used for calendar generation
* Set the `doodleSent` constant to `false` by default and to `true` after having sent a doodle for demo timing.

While developing, use `bundle exec jekyll serve --incremental` to locally test the site.
