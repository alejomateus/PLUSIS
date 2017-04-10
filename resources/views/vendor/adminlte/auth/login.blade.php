@extends('adminlte::layouts.auth')

@section('htmlheader_title')
    Iniciar Sesion
@endsection


@section('content')
<body class="login">

             <div class="logo">
               <img src="{{ asset('assets/pages/img/unad.png') }}" alt="" /> 
        </div>
            <div class="content">
        <form class="login-form"  action="{{ url('/login') }}" method="post" >
                <h3 class="form-title font-green">Inicio de Sesion</h3>
                  @if (count($errors) > 0)
            <div class="alert alert-danger " id="error_user">
                <button class="close" data-close="alert"></button>
                <span id="text-user"> 
                    <strong>Whoops!</strong> Error al intentar iniciar sesión<br><br>
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul></span>
            </div>
        @endif
        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                    <login-input-field
                    name="{{ config('auth.providers.users.field','email') }}"
                    domain="{{ config('auth.defaults.domain','') }}"
                    ></login-input-field>
                <div class="form-group">
                    <!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
                    
                    <input class="form-control form-control-solid placeholder-no-fix" type="email" value="{{old('email') }}" placeholder="{{ trans('adminlte_lang::message.email') }}" name="email" id="email"/> 

            </div>
                <div class="form-group">
                    
                    <input class="form-control form-control-solid placeholder-no-fix" type="password" autocomplete="off" placeholder="{{ trans('adminlte_lang::message.password') }}" name="password" id="password" /> 
                    
                </div>
                  <div class="form-group">
                {!! Recaptcha::render() !!}
                </div>

                <div class="form-actions">
                    <input type="submit"  id="login-btn"  class="btn green uppercase" value="Ingresar">
                    <a href="javascript:;" id="forget-password" class="forget-password">Olvidaste la contraseña?</a>
                </div>
            
            </form>
            <form  class="forget-form" action="{{ url('/password/reset') }}" method="post">
                <h3 class="font-green">Olvidaste tu Contraseña?</h3>
                <p> Ingresa tu correo electronico registrado en el sistema. </p>
                <div class="form-group">
                    <input class="form-control placeholder-no-fix" type="text"  value="{{ old('email') }}" placeholder="Email" name="email" id="email"/> </div>
           
                <div class="form-actions">
                    <button type="button" id="back-btn" class="btn btn-default">Atras</button>
                    <button type="submit" class="btn btn-success uppercase pull-right">Enviar</button>
                </div>
            </form>
            </div>
            <!--[if lt IE 9]>
<script src="{{ ('assets/global/plugins/respond.min.js') }}"></script>
<script src="{{ ('assets/global/plugins/excanvas.min.js') }}"></script> 
<![endif]-->
        <!-- BEGIN CORE PLUGINS -->
        <!--<script src="{{ ('assets/global/plugins/jquery.min.js') }}" type="text/javascript"></script>
        <script src="{{ ('assets/global/plugins/bootstrap/js/bootstrap.min.js')}}" type="text/javascript"></script>
        <script src="{{ ('assets/global/plugins/js.cookie.min.js')}}" type="text/javascript"></script>
        <script src="{{ ('assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js')}}" type="text/javascript"></script>
        <script src="{{ ('assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js')}}" type="text/javascript"></script>
        <script src="{{ ('assets/global/plugins/jquery.blockui.min.js')}}" type="text/javascript"></script>
        <script src="{{ ('assets/global/plugins/uniform/jquery.uniform.min.js')}}" type="text/javascript"></script>
        <script src="{{ ('assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js')}}" type="text/javascript"></script>
     
        <script src="{{ ('assets/global/plugins/jquery-validation/js/jquery.validate.min.js')}}" type="text/javascript"></script>
        <script src="{{ ('assets/global/plugins/jquery-validation/js/additional-methods.min.js')}}" type="text/javascript"></script>
        <script src="{{ ('assets/global/plugins/select2/js/select2.full.min.js')}}" type="text/javascript"></script>
        
        
        <script src="{{ ('assets/global/scripts/app.min.js')}}" type="text/javascript"></script>-->
        <!--<script src="{{ ('assets/global/plugins/jquery.min.js') }}" type="text/javascript"></script>
        <script src="{{ ('assets/global/plugins/jquery-validation/js/jquery.validate.min.js')}}" type="text/javascript"></script>
        -->
        <script src="{{ ('assets/pages/scripts/login.min.js')}}" type="text/javascript"></script>
       
</body>

@endsection
