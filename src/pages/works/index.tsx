import { List } from "@mui/material";
import { Box } from "@mui/system";
import DataAnalysisField from "../../components/works/DataAnalysisField";
import TwitterField from "../../components/works/TwitterField";

const Index = () => {
  return (
    <Box sx={{ paddingTop: "55px", minHeight: "90vh" }}>
      <Box sx={{ width: "90%", margin: "0 auto" }}>
        <h2>My works</h2>
        <List>
          <TwitterField />
          <DataAnalysisField />
        </List>
      </Box>
    </Box>
  );
};

export default Index;
