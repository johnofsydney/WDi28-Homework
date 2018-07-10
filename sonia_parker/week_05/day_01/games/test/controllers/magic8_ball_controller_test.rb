require 'test_helper'

class Magic8BallControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get magic8_ball_index_url
    assert_response :success
  end

end
