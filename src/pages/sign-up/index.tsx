import SignUpImage from './sign-up-image';
import { Grid, GridColumn7, GridColumn5, Div, GridColumn12 } from '../../shared/styles/styles';

const SignUp = () => {
  return (
    <>
      <Grid>
        <GridColumn5 style={{ height: '100vh', color: 'black' }}>
          <h1>Create your account</h1>
          <form>
            <Grid>
              <GridColumn12>
                <input type="email" name="email" id="" placeholder='Email' />
              </GridColumn12>
              <GridColumn12>
                <input type="password" name="password" id="" placeholder='Password' />
              </GridColumn12>
              <GridColumn12>
                <input type="password" name="retypePassword" id="" placeholder='Re-type Password' />
              </GridColumn12>
            </Grid>
          </form>
        </GridColumn5>
        <GridColumn7>
          <SignUpImage></SignUpImage>
        </GridColumn7>
      </Grid>
    </>
  )
}

export default SignUp