<template>
    <div v-if="error">{{ error }}</div>
    <div class="login-wrap d-flex align-items-center flex-wrap justify-content-center">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-md-6 col-lg-7">
						<img src="vendors/images/login-page-img.png" alt="" />
					</div>
					<div class="col-md-6 col-lg-5">
						<div class="login-box bg-white box-shadow border-radius-10">
							<div class="login-title">
								<h2 class="text-center text-primary">Login</h2>
							</div>
							<form @submit.prevent="login()">
								<div class="select-role">
									<div class="btn-group btn-group-toggle" data-toggle="buttons">
										<label class="btn active">
											<input type="radio" name="options" id="admin" />
											<div class="icon">
												<img
													src="vendors/images/briefcase.svg"
													class="svg"
													alt=""
												/>
											</div>
											<span>I'm</span>
											Student
										</label>
										<label class="btn">
											<input type="radio" name="options" id="user" />
											<div class="icon">
												<img
													src="vendors/images/person.svg"
													class="svg"
													alt=""
												/>
											</div>
											<span>I'm</span>
											Teacher
										</label>
									</div>
								</div>
								<div class="input-group custom">
									<input
                                        v-model="login.username"
										type="text"
										class="form-control form-control-lg"
										placeholder="Username"
									/>
									<div class="input-group-append custom">
										<span class="input-group-text"
											><i class="icon-copy dw dw-user1"></i
										></span>
									</div>
								</div>
								<div class="input-group custom">
									<input
                                        v-model="login.password"
										type="password"
										class="form-control form-control-lg"
										placeholder="**********"
									/>
									<div class="input-group-append custom">
										<span class="input-group-text"
											><i class="dw dw-padlock1"></i
										></span>
									</div>
								</div>
								<div class="row pb-30">
									<div class="col-6">
										<div class="custom-control custom-checkbox">
											<input
												type="checkbox"
												class="custom-control-input"
												id="customCheck1"
											/>
											<label class="custom-control-label" for="customCheck1"
												>Remember</label
											>
										</div>
									</div>
									<div class="col-6">
										<div class="forgot-password">
											<a href="forgot-password.html">Forgot Password</a>
										</div>
									</div>
								</div>
								<div class="row">
									<div class="col-sm-12">
										<div class="input-group mb-0">
											<button type="submit" class="btn btn-primary btn-lg btn-block">
                                                Sign In
                                            </button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                error: null,
                login: {
                    username: null,
                    password: null
                }
            }
        },
        methods: {
            login() {
                console.log('Login...');
                const response = this.$appAxios.post("/test", { ...this.login })
                console.log(response);
                let responseOK = response && response.status === 200
                if (responseOK) {
                    this.$router.push({ name: "Home" })
                }
                this.error = response.error
                this.$router.push({ name: "Login" })
            }
        }
    }
</script>

<style>
    @import '/vendors/styles/core.css';
	@import '/vendors/styles/style.css';
	@import '/vendors/styles/icon-font.min.css';
	@import '/src/plugins/switchery/switchery.min.css';
	@import '/src/plugins/bootstrap-tagsinput/bootstrap-tagsinput.css';
	@import '/src/plugins/datatables/css/dataTables.bootstrap4.min.css';
	@import '/src/plugins/datatables/css/responsive.bootstrap4.min.css';
	@import '/src/plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.css';
</style>