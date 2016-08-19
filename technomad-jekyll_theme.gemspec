# coding: utf-8

Gem::Specification.new do |s|
  s.name          = "technomad-jekyll_theme"
  s.version       = "0.1.6"
  s.authors       = ["Tommy Williams"]
  s.email         = ["tom@technomad.media"]

  s.summary       = "technomad, a jekyll theme built by wommy"
  s.homepage      = "https://github.com/wommy/technomad-jekyll_theme"
  s.license       = "Apache-2.0"

  s.files = `git ls-files -z`.split("\x0").grep(%r{^(_sass|_includes|_layouts|LICENSE|README)/})

  s.add_development_dependency "jekyll", "~> 3.2"
  s.add_development_dependency "bundler", "~> 1.12"
  s.add_development_dependency "rake", "~> 10.0"
end
