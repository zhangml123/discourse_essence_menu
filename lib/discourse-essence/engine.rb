module DiscourseEssence
  class Engine < ::Rails::Engine
    isolate_namespace DiscourseEssence

    config.after_initialize do

      Discourse::Application.routes.append do
        mount ::DiscourseEssence::Engine, at: "/discourse-essence"
      end
    end

  end
end