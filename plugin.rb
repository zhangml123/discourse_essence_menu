# name: discourse essence menu
# about: discourse essence menu
# version: 0.1
# authors: null
# url: https://github.com/zhangml123/discourse_essence_menu

enabled_site_setting :discourse_essence_menu
after_initialize do

  module ::DiscourseEssence
    class Engine < ::Rails::Engine
      engine_name "discourse_essence"
      isolate_namespace DiscourseEssence
    end
  end	
  require_dependency "application_controller"
  class DiscourseEssence::EssenceController < ::ApplicationController
  	skip_before_action :check_xhr, only: [:index]
    def index
      render_json_dump("Hello World")
    end

    def test
      render json:{"status": "test"}
    end
  end
  DiscourseEssence::Engine.routes.draw do
    get "/test.json" => "essence#test"
    get "/" => "essence#index", constraints: DiscourseEssenceConstraint.new
  end

  Discourse::Application.routes.append do
    mount ::DiscourseEssence::Engine, at: "/essence"
  end
end

class DiscourseEssenceConstraint
  def matches?(request)
    SiteSetting.discourse_essence_menu
  end
end