require 'GiphyClient'

class TeamsController < ApplicationController
  skip_before_action :verify_authenticity_token
  @@teams = []

  def index
    #render json: { content: Team.all }
    render json: { content: @@teams }
  end

  def create
    @@teams |= [params[:team]] unless params[:team].blank?
    #if not params[:team].blank? and Team.where(:name => params[:team]).blank?
    #    @team = Team.new
    #    @team.name = :team
    #    @team.save!
    #end
    render json: { content: @@teams }
  end

  def get_gif    
    api_instance = GiphyClient::DefaultApi.new

    api_key = ENV["GIPHY_AUTH_TOKEN"]
    team = params[:team].blank? ? "unknown" : params[:team]

    opts = { 
      limit: 1, # Integer | The maximum number of records to return.
      offset: 0, # Integer | An optional results offset. Defaults to 0.
      rating: "g", # String | Filters results by specified rating.
      lang: "en", # String | Specify default country for regional content; use a 2-letter ISO 639-1 country code. See list of supported languages <a href = \"../language-support\">here</a>.
      fmt: "json" # String | Used to indicate the expected response format. Default is Json.
    }
    
    result = api_instance.gifs_search_get(api_key, team, opts)

    render json: { content: result }
  end
end
