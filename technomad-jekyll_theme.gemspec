# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "technomad-jekyll_theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Tommy Williams"]
  spec.email         = ["tom@technomad.media"]

  spec.summary       = "technomad, a jekyll theme built by wommy"
  spec.homepage      = "https://github.com/wommy/technomad-jekyll_theme"
  spec.license       = "Apache-2.0"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(_layouts|_includes|_sass|LICENSE|README)/i}) }

  spec.add_development_dependency "jekyll", "~> 3.2"
  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
