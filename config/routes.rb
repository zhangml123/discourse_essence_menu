require_dependency "discourse_essence_constraint"

DiscourseEssence::Engine.routes.draw do
  get "/hello" => "hello#index", constraints: DiscourseEssenceConstraint.new
  get "/" => "hello#index", constraints: DiscourseEssenceConstraint.new
end