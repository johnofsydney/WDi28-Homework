require 'test_helper'

class RockPaperScissorsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get rock_paper_scissors_index_url
    assert_response :success
  end

end
