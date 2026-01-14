source "https://rubygems.org"

# 1. This is the magic line. It locks your local setup to match GitHub Pages exactly.
gem "github-pages", group: :jekyll_plugins

# 2. Windows support (Keep this if you are on Windows, it doesn't hurt GitHub)
gem "wdm", "~> 0.1.0", :install_if => Gem.win_platform?

# 3. Timezone support (Required for Windows/JRuby)
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# (Optional) If you use these plugins, keep them. If not, you can delete this block.
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
end