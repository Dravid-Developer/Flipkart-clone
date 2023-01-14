import { AppBar, Box, styled, Toolbar, Typography } from "@mui/material";
import CustomButtons from "./CustomButtons";
import Search from "./Search";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const Plusimage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 2,
});

const CustomButtonWrapper = styled(Box)`
  margin: 0 auto 0 5%;
`;

const logoURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

const subURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

const Header = () => {
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <Component>
          {/* inside style css come as a camelcase */}
          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp; {/* for space between  */}
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
                {/* Box we are using as a replacement for typography for styling */}
              </Box>
            </SubHeading>
            <Plusimage src={subURL} alt="sub-logo" />
          </Box>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};
export default Header;
